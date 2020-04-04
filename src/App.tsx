import React from 'react';
import {connect} from "react-redux";
import NestRoutes from './router/NestRoutes';
import Header from "./components/Header/Header";
import Store from "./redux/store";
import Drawer from './components/drawer/Drawer';
const currentData = Store.getState();
class App extends React.Component {
    render() {
        return (
            <div>
                <Header
                    userName={currentData.shouldLogin.userName}
                    userAvater={currentData.shouldLogin.userAvater}
                    userUID={currentData.shouldLogin.userUID}
                    userCookie={currentData.shouldLogin.userCookie}
                    isLogin={currentData.shouldLogin.isLogin}
                />
                <Drawer/>
                <NestRoutes />
            </div>
        );
    }
}

export default App;
