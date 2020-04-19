import React, {createElement} from 'react';
import VideoPlayer from '../../components/play-video/VideoPlayer2';
import {RouteComponentProps} from "react-router";
import {Menu, Comment, Avatar} from 'antd';
import {LikeFilled} from '@ant-design/icons';
import {Link, withRouter} from "react-router-dom";
// import ReactPlayer from 'react-player';

import Store from "../../redux/store";
import * as VideoAPI from '../../api/video';
import * as PublicAPI from '../../api/public';
import * as BangumiAPI from '../../api/bangumi';
import * as SearchAPI from '../../api/search';
import {getWithCookie} from '../../api/fetch'

const currentData = Store.getState();

interface VideoProps extends RouteComponentProps<{ aId: any, p: any }> {
}

interface VideoState {
    type: any,
    aId: any,
    bvId: string,
    cId: any,
    ep: any,
    p: number,
    title: any,
    cover: string,
    description: any,
    duration: any,
    url: string[],
    upUser: {
        mid: any,
        name: string,
        face: string,
    },
    playList: any,
    comments: any,
    otherComments: any,
}

class Video extends React.Component<VideoProps, VideoState> {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            aId: null,
            bvId: '',
            cId: '',
            ep: '',
            p: 1,
            title: null,
            cover: '',
            duration: null,
            description: '',
            url: [],
            upUser: {
                mid: null,
                name: '',
                face: ''
            },
            playList: null,
            comments: null,
            otherComments: null,
        }
    }

    async fetchVideoData(data: any) {
        const avNum = data.replace('av', '');
        console.log(avNum);
        const basicData = await VideoAPI.fetchVideoDetail(data, this.props.match.params.p, '');
        if (basicData) {
            const videoData = basicData.data.video;
            this.setState({
                type: 'm4s',
                aId: avNum,
                bvId: videoData.viewInfo.bvid,
                cId: videoData.viewInfo.cid,
                ep: '',
                p: this.props.match.params.p,
                title: videoData.viewInfo.title,
                cover: videoData.viewInfo.pic,
                duration: videoData.viewInfo.duration,
                description: videoData.viewInfo.desc,
                url: [],
                upUser: videoData.viewInfo.owner,
                playList: videoData.viewInfo.pages,
            }, () => console.log(this.state))
        } else {
            const bangumi = await this.changeToBangumi(data);
            const ss = (((bangumi[0])[0].goto_url).split('ss')[1]).replace('/', '');
            const playList = await this.fetchBangumiPlayList(ss);
            const cIdandEp = playList.map((item, index) => {
                if (item.aid == avNum) {
                    return {'cid': item.cid, 'ep': ((item.share_url.split('ep')[1]).split('?')[0]).replace('/', '')};
                }
            });
            this.setState({
                type: 'flv',
                aId: avNum,
                bvId: '',
                cId: cIdandEp.filter(index => index)[0].cid,
                ep: cIdandEp.filter(index => index)[0].ep,
                p: 1,
                title: (bangumi[0])[0].title,
                description: (bangumi[0])[0].desc,
                duration: '',
                url: [],
                upUser: {
                    mid: null,
                    name: '',
                    face: ''
                },
                playList,
            }, () => console.log(this.state));
        }
    }

    async fetchBangumiPlayList(ss: any) {
        const playlist = await BangumiAPI.fetchBangumiSection(ss, '');
        return playlist.data.result.main_section.episodes;
    }

    async judgeVideoType(aid: any, cid: any) {
        const judge = await PublicAPI.fetchVideoType(aid, cid, '');
        return judge.data.bilibili.interaction;
    }

    async changeToBangumi(data: any) {
        const searchData = await SearchAPI.fetchSearch(data, 1, 20, 'all', 'totalrank');
        const obj = searchData.data.data.result.map((item) => {
            if (item.data.length !== 0) {
                return item.data;
            }
        });
        return obj.filter(item => item);
    }

    async fetchVideoURL(aid: any, cid: any) {
        const urlRes = await PublicAPI.fetchVideoUrl(aid, cid, '');
        console.log(urlRes.data.data.durl);
        this.setState({
            url: urlRes.data.data.durl.map(({ url }) => url),
        })
    }

    async fetchPlayingBangumi(ep: any) {
        const bangumi = await BangumiAPI.fetchPlayingBangumi(ep, '');
        console.log(bangumi.currentP.data.durl);
        this.setState({
            url: bangumi.currentP.data.durl.map(({ url }) => url),
        })
    }

    async fetchComments() {
        const comment = await PublicAPI.fetchComments(this.state.aId);
        console.log(comment.data.data);
        this.setState({
            comments: comment.data.data.hots,
            otherComments: comment.data.data.replies,
        }, () => console.log(this.state))
    }

    searchURL() {
        return this.state.type === 'm4s' ? (
            this.fetchVideoURL(this.state.aId, this.state.playList.find(({page}) => +this.props.match.params.p === page).cid)
        ) : (
            this.fetchPlayingBangumi(this.state.ep)
        );
    }

    async componentDidMount() {
        await this.fetchVideoData(this.props.match.params.aId);
        await this.fetchComments();
        await this.searchURL();
    }

    async componentDidUpdate(prevPrpos: VideoProps) {
        if (prevPrpos.match.params.p !== this.props.match.params.p || prevPrpos.match.params.aId !== this.props.match.params.aId ) {
            await this.fetchVideoData(this.props.match.params.aId);
            await this.searchURL();
        }
    }

    renderAllItems(data: any) {
        // const data = this.state.playList;
        const {SubMenu} = Menu;
        if (data) {
            return (
                <Menu mode="vertical">
                    <SubMenu
                        title={this.state.title}
                    >
                        {
                            data.map(
                                (item) =>
                                    <Menu.Item>
                                        <Link
                                            to={`/video/av${this.state.type === 'm4s' ? this.state.aId : item.aid}/${item.page || 1}`}
                                        >
                                            {this.state.type === 'm4s' ? (item.part) : (item.long_title)}
                                        </Link>
                                    </Menu.Item>
                            )
                        }
                    </SubMenu>
                </Menu>
            )
        }
    }

    renderComments(data: any) {
        return data !== null ? data.map((item) => {
            return <Comment
                actions={[<span key='comment-basic-like'>
                    <a>
                        {createElement(LikeFilled)}
                        {item.like}
                    </a>
                </span>]}
                author={<Link to={`/up/${item.member.mid}`}>{item.member.uname}</Link>}
                avatar={
                    <Link to={`/up/${item.member.mid}`}>
                        <Avatar
                            src={item.member.avatar}
                        />
                    </Link>
                }
                content={item.content.message}
            />
        }) : null;
    }

    render() {
        return (
            <div>
                <div style={{width: '50%', position: 'sticky', top: 0, display: 'inline-block'}}>
                    <>{this.renderAllItems(this.state.playList)}</>
                    <VideoPlayer style={{width: '100%'}} url={this.state.url}/>
                    <>{this.state.description}</>
                </div>
                <div style={{
                    width: '50%',
                    display: 'inline-block',
                    verticalAlign: 'top'
                }}>
                    热门评论
                    <div>
                        {this.renderComments(this.state.comments)}
                    </div>
                    <br/>
                    其他评论
                    <div>
                        {this.renderComments(this.state.otherComments)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Video);
