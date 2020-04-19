import React from 'react';
import { throttle } from 'lodash-es'
import * as SearchAPI from '../../api/search';
import {Tabs,Card} from 'antd';
import {RouteComponentProps} from "react-router";
import VideoItem from '../../components/video-item/video-item';

const search_type=[
    {'name':'综合','val':'all'},
    {'name':'番剧','val':'media_bangumi'},
    {'name':'UP🐖','val':'bili_user'},
    {'name':'影视','val':'media_ft'}
];
const order=[
    {'name':'默认排序','val':'totalrank'},
    {'name':'播放量','val':'click'},
    {'name':'新发布','val':'all'},
    {'name':'弹幕','val':'all'},
];

interface resultProps extends RouteComponentProps<{ wd: any }> {
}
interface resultState{
    page:number,
    search_type:string,
    order:string,
    data:any[],
    fetching: boolean,
}
class Result extends React.Component<resultProps,resultState>{
    state={
        page:1,
        search_type:'all',
        order:'totalrank',
        data: [],
        fetching: false,
    };

    renderType(){
        const {TabPane} = Tabs;
        return (
            <Tabs onChange={key=>this.setState({search_type:key})}>
                {
                    search_type.map((item)=>{
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

    async query(keywd,page,stype,order){
        this.setState({ fetching: true })
        try {
            const res=await SearchAPI.fetchSearch(keywd,page,20,stype,order);
            let resData = res.data.data.result;
            if(stype === 'all'){
                resData = res.data.data.result?.[8].data
            }
            this.setState(({ data }) => ({
                data: data.concat(...res.data.data.result)
            }),()=>console.log(this.state.data))
        } finally {
            this.setState({fetching: false })
        }
    }

    renderVideoCard(data:any){
        if(this.state.search_type==='all'){

        }else if(this.state.search_type==='bili_user'){

        }else{

        }
    }



    getDefaultResult(){
        this.query(this.props.match.params.wd,this.state.page,this.state.search_type,this.state.order);
    }

    onScrollDataEvent = throttle(() => {
        if ((document.scrollingElement!.scrollTop + window.innerHeight + 100) >= document.scrollingElement!.scrollHeight && !this.state.fetching) {
            this.setState(({ page }) => ({
                page: page + 1
            }))
        }
    }, 100)

    componentDidMount(){
        this.getDefaultResult();
        window.addEventListener('scroll', this.onScrollDataEvent)
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.onScrollDataEvent)
    }

    componentDidUpdate (nextProps,nextState) {
        if (
            nextProps.match.params.wd !== this.props.match.params.wd ||
            nextState.page !== this.state.page ||
            nextState.search_type !== this.state.search_type ||
            nextState.order !== this.state.order
        ) {            
           this.query(this.props.match.params.wd,this.state.page,this.state.search_type,this.state.order);
        }
        
    }

    render(){
        return(
            <div>
                <>{this.renderType()}</>
                {this.props.match.params.wd}
                <div style={{height: 1000 }}></div>
            </div>
        )
    }
}

export default Result;
