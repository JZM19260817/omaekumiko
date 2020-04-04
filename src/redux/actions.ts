import * as ActionTypes from "./action-types";
import {AnyAction} from "redux";

export function setShouldLogin(shouldLogin:any):AnyAction{
    console.log('should:',shouldLogin)
    return {type:ActionTypes.SET_SHOULD_LOGIN,shouldLogin};
}

export function setChannelBar(channelBar:any):AnyAction{
    return{type:ActionTypes.SET_CHANNEL_BAR,channelBar}
}

export function setLiveData(liveData: any): AnyAction {
    return { type: ActionTypes.SET_LIVE_DATA, liveData };
}

export function setLiveList(liveListData: any): AnyAction {
    return { type: ActionTypes.SET_LIVE_LIST, liveListData };
}

export function setRoomData(roomData: any): AnyAction {
    return { type: ActionTypes.SET_ROOM_DATA, roomData };
}

