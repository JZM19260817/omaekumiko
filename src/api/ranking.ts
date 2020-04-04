import {get} from './fetch';
import{URL_RANKING}from './url';

export function fetchRanking(rid:any,day:any){
    let param=`rid=${rid}/day={day}`;
    return get(URL_RANKING,param,'');
}
