import {get} from './fetch';
import{URL_RANKING,URL_RANKING_INDEX}from './url';

export function fetchRanking(rid:any,day:any){
    let param=`rid=${rid}/day=${day}`;
    return get(URL_RANKING,param,'');
}

export function fetchRankingIndex(){
    return get(URL_RANKING_INDEX,'','');
}
