import {AnyAction, combineReducers} from "redux";
import * as ActionTypes from './action-types';

const initState = {
    shouldLogin: {
        userName: '',
        userAvater: '',
        userUID: '',
        userCookie: '',
        isLogin: false,
    },
    channelBar:{},
    liveData: { // 直播数据
        bannerList: [],
        itemList: []
    },
    liveListData: {  // 直播房间列表
        total: 0,
        list: []
    },
    roomData: {},  // 直播间数据
};

function combineShouldLogin(shouldLogin = initState.shouldLogin, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_SHOULD_LOGIN:
            return action.shouldLogin;
        default:
            return shouldLogin;
    }
}

function combineChannelBar(channelBar=initState.channelBar,action:AnyAction){
    switch(action.type){
        case ActionTypes.SET_CHANNEL_BAR:
            return action.channelBar;
        default:
            return channelBar;
    }
}

function combineLiveData(liveData = initState.liveData, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_LIVE_DATA:
            return action.liveData;
        default:
            return liveData;
    }
}

function combineLiveListData(liveListData = initState.liveListData, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_LIVE_LIST:
            return action.liveListData;
        default:
            return liveListData;
    }
}

function combineRoomData(roomData = initState.roomData, action: AnyAction) {
    switch (action.type) {
        case ActionTypes.SET_ROOM_DATA:
            return action.roomData;
        default:
            return roomData;
    }
}

const reducer = combineReducers({
    shouldLogin: combineShouldLogin,
    liveData: combineLiveData,
    liveListData: combineLiveListData,
    roomData: combineRoomData
});

export default reducer;
