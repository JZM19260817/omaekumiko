import React from 'react';
import Store from "./redux/store";
import {Route, Switch, RouteComponentProps, withRouter, Redirect} from 'react-router';

import Header from "./components/Header/Header";

import MainPage from './views/MainPage/MainPage';
import LoginPage from './views/Login/login';
import SearchPage from './views/Search/search';
import ChannelPage from './views/Channel/channel';
import UpUser from "./views/UpUser/UpUser";
import Video from "./views/Video/Video";
import Bangumi from './views/Video/Bangumi';
import Result from "./views/Search/Result";
import bigData from "./views/BigData/bigData";

const currentData = Store.getState();

interface appProps extends RouteComponentProps<{ rid: string }> {
}

interface appState {
    currentIndex: string;
    drawerItem: Array<{}>,
}

class App extends React.Component<appProps, appState> {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: '0',
            drawerItem: [{"typename": "主页", "tid": "0"}],
        }
    }

    async partition() {
        // const res = await MainAPI.fetchPartition();
        // const arr = res.data.partitionList[0];
        const arr=[{"tid": 1, "typename": "动画"}, {"tid": 13, "typename": "番剧"}, {
            "tid": 167,
            "typename": "国创"
        }, {"tid": 3, "typename": "音乐"}, {"tid": 129, "typename": "舞蹈"}, {"tid": 36, "typename": "科技"}, {
            "tid": 188,
            "typename": "数码"
        }, {"tid": 4, "typename": "游戏"}, {"tid": 5, "typename": "娱乐"}, {"tid": 119, "typename": "鬼畜"}, {
            "tid": 23,
            "typename": "电影"
        }, {"tid": 11, "typename": "电视剧"}, {"tid": 177, "typename": "纪录片"}, {
            "tid": 181,
            "typename": "影视"
        }, {"tid": 155, "typename": "时尚"}, {"tid": 160, "typename": "生活"}, {"tid": 165, "typename": "广告"}];
        const tot = [...this.state.drawerItem, ...arr];
        this.setState({
            drawerItem: tot
        })
    }

    async componentDidMount() {
        await this.partition();
    }

    render() {
        return (
            <>
                <Header
                    userName={currentData.shouldLogin.userName}
                    userAvater={currentData.shouldLogin.userAvater}
                    userUID={currentData.shouldLogin.userUID}
                    userCookie={currentData.shouldLogin.userCookie}
                    isLogin={currentData.shouldLogin.isLogin}
                />
                <Switch>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/search" component={SearchPage}/>
                    <Route exact path="/video/:aId/:p" component={Video}/>
                    <Route exact path="/bangumi/ep:ep" component={Bangumi}/>
                    <Route exact path="/up/:uId" component={UpUser}/>
                    <Route exact path="/search/:wd" component={Result}/>
                    <Route exact path="/bigData" component={bigData}/>
                    <Route path="/" render={() => (
                        <Switch>
                            <Redirect from="/channel/0" to="/" />
                            <Route
                                path={["/channel/:rid", "/"]}
                                render={() => <ChannelPage drawerItem={this.state.drawerItem} />}
                            />
                        </Switch>
                    )}/>
                </Switch>
            </>
        );
    }
}

export default withRouter(App);
