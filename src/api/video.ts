import {get} from './fetch';
import{
    URL_VIDEO_DETAIL
}from './url';

export function fetchVideoDetail(aId:any,p:any,cookie:any){
    let param=`${aId}/p${p}`;
    return get(URL_VIDEO_DETAIL,param,cookie);
}
