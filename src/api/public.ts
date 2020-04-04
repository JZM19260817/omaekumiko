import {get} from './fetch';
import{
    URL_COMMENTS,
    URL_DANMAKU,
    URL_VIDEO_PLAY_URL,
    URL_VIDEO_TYPE,
    URL_INTERACT_VIDEO
}from './url'

export function fetchComments(aid:any){
    const param=`av${aid}`;
    return get(URL_COMMENTS,param,'');
}

export function fetchDanmaku(oid:any){
    const param=`${oid}`;
    return get(URL_DANMAKU,param,'');
}

export function fetchVideoUrl(aid:any,cid:any,cookie:any){
    const param=`av${aid}/cid=${cid}`;
    return get(URL_VIDEO_PLAY_URL,param,cookie);
}

export function fetchVideoType(aid:any,cid:any,cookie:any){
    const param=`av${aid}/cid=${cid}`;
    return get(URL_VIDEO_TYPE,param,cookie);
}

export function fetchInteractVideo(aid:any,eid:any,gvid:any,cookie:any){
    const param=`aid${aid}/eid${eid}/gvid${gvid}`;
    return get(URL_INTERACT_VIDEO,param,cookie);
}
