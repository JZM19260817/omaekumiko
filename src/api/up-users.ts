import {get} from './fetch';
import{
    URL_UPUSER_DATA,
    URL_MY_FOLLOW,
    URL_TOP_VIDEO_FANS,
    URL_TOP_VIDEO_OTHERS,
    URL_ALL_VIDEOS
}from './url';

export function fetchUpUserData(uid:any,cookie:any){
    const param=`${uid}`;
    return get(URL_UPUSER_DATA,param,cookie);
}

export function fetchMyFollow(uid:any,cookie:any){
    const param=`${uid}`;
    return get(URL_MY_FOLLOW,param,cookie);
}

export function fetchTopForFans(uid:any,cookie:any){
    const param=`${uid}`;
    return get(URL_TOP_VIDEO_FANS,param,cookie);
}

export function fetchTopForOthers(uid:any,cookie:any){
    const param=`${uid}`;
    return get(URL_TOP_VIDEO_OTHERS,param,cookie);
}

export function fetchAllVideos(uid:any,ps:any,cookie:any){
    const param=`${uid}/${ps}`;
    return get(URL_ALL_VIDEOS,param,cookie);
}
