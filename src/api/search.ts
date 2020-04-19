
import {get} from './fetch';
import {
    URL_SEARCH,
    URL_HOTWD
}from './url';

export function fetchHotwd(){
    return get(URL_HOTWD,'','');
}

export function fetchSearch(keywd:any,pg:any,pgsize:any,stype:any,order:any){
    let param=`keyword=${encodeURI(keywd)}&page=${pg}&pagesize=${pgsize}&search_type=${stype}&order=${order}`;
    return get(URL_SEARCH,param,'');
}
