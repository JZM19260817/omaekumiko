import {get} from "./fetch";
import {
    URL_LIVE_AREA,
    URL_LIVE_DATA,
    URL_LIVE_LIST,
    URL_LIVE_ROOM_INFO,
    URL_LIVE_ROOM_GIFT,
    URL_LIVE_PLAY_URL,
    URL_LIVE_DANMU_CONFIG
} from "./url";

export function fetchLiveArea(){
    return get(URL_LIVE_AREA,'','');
}

export function fetchLiveData(){
    return get(URL_LIVE_DATA,'','');
}

export function fetchLiveList(){
    return get(URL_LIVE_LIST,'','');
}

export function fetchLiveRoomInfo(roomId:any){
    const param=`room${roomId}`;
    return get(URL_LIVE_ROOM_INFO,param,'');
}

export function fetchLiveRoomList(){
    return get(URL_LIVE_ROOM_GIFT,',','');
}

export function fetchLivePlayUrl(roomId:any) {
    const param=`room${roomId}`;
    return get(URL_LIVE_PLAY_URL,param,'');
}

export function fetchDanmakuConfig(roomId:any){
    const param=`room${roomId}`;
    return get(URL_LIVE_DANMU_CONFIG,param,'');
}
