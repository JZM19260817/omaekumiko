import React from 'react';
import Store from "./redux/store";
import {Route, Switch} from 'react-router';

import Header from "./components/Header/Header";
import Drawer from './components/drawer/Drawer';

import MainPage from './views/MainPage/MainPage';
import LoginPage from './views/Login/login';
import SearchPage from './views/Search/search';
import ChannelPage from './views/Channel/channel';

import * as MainAPI from './api/main';
import {Tabs} from "antd";

const currentData = Store.getState();

interface appProps {
}

interface appState {
    currentIndex: number;
    drawerItem: Array<{}>,
}

class App extends React.Component<appProps, appState> {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            drawerItem: [{"typename": "主页", "tid": "0"}],
        }
    }

    async partition() {
        const res = await MainAPI.fetchPartition();
        const arr = res.data.partitionList[0];
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
                    <Route path="/" exact component={() => (
                        <div>
                            <Drawer
                                currentIndex={this.state.currentIndex}
                                drawerItem={this.state.drawerItem}
                            />
                            <Route path="/" exact component={MainPage}/>
                            <Route path="/channel/rid=:rid" component={ChannelPage}/>
                        </div>
                    )}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/search" component={SearchPage}/>
                </Switch>
            </>
        );
    }
}

export default App;
