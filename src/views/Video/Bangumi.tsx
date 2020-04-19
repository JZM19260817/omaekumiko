import React, {createElement} from 'react';
import VideoPlayer from '../../components/play-video/VideoPlayer2';
import {Link, withRouter} from "react-router-dom";
import {Menu, Comment, Avatar} from 'antd';
import {LikeFilled} from '@ant-design/icons';
import {RouteComponentProps} from "react-router";

import Store from "../../redux/store";
import * as VideoAPI from '../../api/video';
import * as PublicAPI from '../../api/public';
import * as BangumiAPI from '../../api/bangumi';

interface BangumiProps extends RouteComponentProps<{ ep:any }> {
}

interface BangumiState {
    aId: any,
    bvId: string,
    cId: any,
    ep: any,
    title: any,
    cover: string,
    description: any,
    duration: any,
    url: string[],
    playList: any,
    comments: any,
    otherComments: any,
}

class Bangumi extends React.Component<BangumiProps,BangumiState>{
    constructor(props){
        super(props);
        this.state={
            aId: '',
            bvId: '',
            cId: '',
            ep: '',
            title: '',
            cover: '',
            description: '',
            duration: '',
            url: [],
            playList: null,
            comments: null,
            otherComments: null,
        }
    }

    async fetchPlayingBangumi(ep:any){
        if(ep!=-1){
            const bangumi = await BangumiAPI.fetchPlayingBangumi(ep, '');
            if(bangumi){
                this.setState({
                    aId:bangumi.thisBangumi.epList.find(({id})=>+this.props.match.params.ep===id).aid,
                    bvId:bangumi.thisBangumi.epList.find(({id})=>+this.props.match.params.ep===id).bvid,
                    cId:bangumi.thisBangumi.epList.find(({id})=>+this.props.match.params.ep===id).cid,
                    ep:this.props.match.params.ep,
                    title:bangumi.thisBangumi.mediaInfo.title,
                    cover:'',
                    description:bangumi.thisBangumi.mediaInfo.evaluate,
                    duration:'',
                    url:bangumi.currentP.data.durl.map(({url})=>url),
                    playList:bangumi.thisBangumi.epList,
                },()=>console.log(this.state))
            }
        }
    }

    async fetchComments() {
        const comment = await PublicAPI.fetchComments(this.state.aId);
        console.log(comment.data.data);
        this.setState({
            comments: comment.data.data.hots,
            otherComments: comment.data.data.replies,
        }, () => console.log(this.state))
    }

    async componentDidMount(){
        await this.fetchPlayingBangumi(this.props.match.params.ep);
        await this.fetchComments();
    }

    async componentDidUpdate(prevProps:BangumiProps){
        if(prevProps.match.params.ep!==this.props.match.params.ep){
            await this.fetchPlayingBangumi(this.props.match.params.ep);
        }
    }

    renderAllItems(data: any) {
        // const data = this.state.playList;
        console.log(data)
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
                                            to={`/bangumi/ep${item.id}`}
                                        >
                                            {item.longTitle}
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

    render(){
        return(
            <div>
                {this.props.match.params.ep==-1?(
                    <>即将开播</>
                ):(
                    <>
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
                    </>
                )}
            </div>
        )
    }
}
export default withRouter(Bangumi);
