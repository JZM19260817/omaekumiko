import {get} from './fetch';
import {
    URL_PLAYING_BANGUMI,
    URL_ABOUT_BANGUMI,
    URL_BANGUMI_SECTION
}from './url';

export function fetchPlayingBangumi(ep:any,cookie:any) {
    const url=URL_PLAYING_BANGUMI;
    const param=`ep${ep}`;
    return get(url,param,cookie);
}

export function fetchAboutBangumi(mid:any,cookie:any){
    const url=URL_ABOUT_BANGUMI;
    const param=`mid${mid}`;
    return get(url,param,cookie);
}

export function fetchBangumiSection(sid:any,cookie:any){
    const url=URL_BANGUMI_SECTION;
    const param=`sid${sid}`;
    return get(url,param,cookie);
}
