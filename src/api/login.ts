import {get,post} from './fetch';
import axios from 'axios';
import{
    URL_OAUTHKEY,
    URL_IDENTIFY
}from './url';

export async function fetchOaugthKey(){
    return await get(URL_OAUTHKEY,'','');
}

export function fetchIdentify(oauthKey:any){
    const param=`${oauthKey}`;
    return get(URL_IDENTIFY,encodeURIComponent(param),'');
}
