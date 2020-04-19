import React from 'react';
import {throttle} from 'lodash-es'
import * as SearchAPI from '../../api/search';
import * as BangumiAPI from '../../api/bangumi';
import {Tabs, Card} from 'antd';
import {RouteComponentProps} from "react-router";
import VideoItem from '../../components/video-item/video-item';
import {Link} from "react-router-dom";

const search_type = [
    {'name': '综合', 'val': 'all'},
    {'name': '番剧', 'val': 'media_bangumi'},
    {'name': 'UP🐖', 'val': 'bili_user'},
    {'name': '影视', 'val': 'media_ft'}
];
const order = [
    {'name': '默认排序', 'val': 'totalrank'},
    {'name': '播放量', 'val': 'click'},
    {'name': '新发布', 'val': 'all'},
    {'name': '弹幕', 'val': 'all'},
];

interface resultProps extends RouteComponentProps<{ wd: any }> {
}

interface resultState {
    page: number,
    search_type: string,
    order: string,
    data: any[],
    fetching: boolean,
}

class Result extends React.Component<resultProps, resultState> {
    state = {
        page: 1,
        search_type: 'all',
        order: 'totalrank',
        data: [],
        fetching: false,
    };

    renderType() {
        const {TabPane} = Tabs;
        return (
            <Tabs onChange={key => this.setState({search_type: key})}>
                {
                    search_type.map((item) => {
                        return <TabPane tab={item.name} key={item.val}/>
                    })
                }
            </Tabs>
        )
    }

    // renderOrder(){
    //     const {TabPane} = Tabs;
    //     return (
    //         <Tabs onChange={key=>this.setState({order:key})}>
    //             {
    //                 order.map((item)=>{
    //                     return <TabPane tab={item.name} key={item.val}/>
    //                 })
    //             }
    //         </Tabs>
    //     )
    // }return ;

    async query(keywd, page, stype, order) {
        this.setState({fetching: true})
        try {
            const res = await SearchAPI.fetchSearch(keywd, page, 20, stype, order);
            let resData = res.data.data.result || [];
            if (stype === 'all') {
                const resData0 = res.data.data.result?.[8].data;
                this.setState(({data}) => ({
                    data: data.concat(...resData0)
                }), () => console.log(this.state.data))
            } else {
                this.setState(({data}) => ({
                    data: data.concat(...resData)
                }), () => console.log(this.state.data))
            }
        } finally {
            this.setState({fetching: false})
        }
    }

    renderVideoCard(data: any) {
        if (this.state.search_type === 'all') {
            return this.state.data.length > 0 ? (
                <VideoItem cardItem={data}/>
            ) : (
                <>好像没有结果欸</>
            )
        } else if (this.state.search_type === 'bili_user') {
            return this.state.data.length > 0 ? (
                data.map((item) => {
                    const {Meta} = Card;
                    return <Link to={`/up/${item.mid}`}><Card
                        hoverable
                        style={{width: 300}}
                        cover={<img src={item.upic}/>}
                    >
                        <Meta title={item.uname}/>
                    </Card></Link>
                })
            ) : (
                <>好像没有结果欸</>
            )
        } else if (this.state.search_type === 'media_bangumi' || this.state.search_type === 'media_ft') {
            return this.state.data.length > 0 ? (
                data.map((item) => {
                    const {Meta} = Card;
                    if (item.type === 'media_bangumi' || item.type === 'media_ft') {
                        return (
                            <Link to={`/bangumi/ep${item.eps[0].id}`}>
                                <Card
                                    hoverable
                                    style={{width: 240}}
                                    cover={<img src={item.cover}/>}
                                >
                                    <Meta title={item.title}/>
                                </Card>
                            </Link>
                        )
                    }
                })
            ) : (
                <>好像没有结果欸</>
            )
        }
    }


    getDefaultResult() {
        this.query(this.props.match.params.wd, this.state.page, this.state.search_type, this.state.order);
    }

    onScrollDataEvent = throttle(() => {
        if (this.state.search_type === 'all' && (document.scrollingElement!.scrollTop + window.innerHeight + 100) >= document.scrollingElement!.scrollHeight && !this.state.fetching) {
            this.setState(({page}) => ({
                page: page + 1
            }))
        }
    }, 100)

    componentDidMount() {
        this.getDefaultResult();
        window.addEventListener('scroll', this.onScrollDataEvent)
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.onScrollDataEvent)
    }

    componentDidUpdate(nextProps, nextState) {
        if (nextState.search_type !== this.state.search_type) {
            this.setState({
                data: [],
            })
        }
        if (
            nextProps.match.params.wd !== this.props.match.params.wd ||
            nextState.page !== this.state.page ||
            nextState.search_type !== this.state.search_type
        ) {
            this.query(this.props.match.params.wd, this.state.page, this.state.search_type, this.state.order);
        }

    }

    render() {
        return (
            <div>
                <>{this.renderType()}</>
                {this.props.match.params.wd}
                <div style={{
                    display: 'flex',
                    width: 1260,
                    flexWrap: 'wrap',
                    margin: '0 auto',
                    justifyContent: 'space-around'
                }}>
                    {this.renderVideoCard(this.state.data)}
                </div>
                <div style={{height: 300}}></div>
            </div>
        )
    }
}

export default Result;
