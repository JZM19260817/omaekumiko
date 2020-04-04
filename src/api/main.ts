import {get, getWithCookie} from './fetch';
import {
    URL_INDEX,
    URL_ROUND_SOWING,
    URL_PARTITION,
    URL_LATEST_BANGUMI
}from './url';

export function fetchIndex(){
    return get(URL_INDEX,'','');
}

export function fetchRoundSowing(){
    return get(URL_ROUND_SOWING,'','');
}

export function fetchPartition(){
    return get(URL_PARTITION,'','');
}

export function fetchLatestBangumi(){
    return get(URL_LATEST_BANGUMI,'','');
}
