import {get} from './fetch';
import {URL_BIGDATA}from './url'
export function getBigData(){
    const url=URL_BIGDATA;
    return get(url,'','');
}
