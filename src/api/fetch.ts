import axios from 'axios';
import fetch from 'cross-fetch';
// axios.defaults.withCredentials=true;

export async function get(url:any,param:any,cookie:any){
    const credentials=localStorage.sessionInfo?JSON.parse(localStorage.sessionInfo).isLogin:false;
    // console.log(credentials);
    return await axios({
        method:'get',
        url:`${url}/${param}`,
        // headers:{
        //     'cookie':cookie,
        // },
        withCredentials:credentials
    }).then(res=>res.data)
        .catch(e=>console.error(e));
}

export async function getWithCookie(url:any,param:any,cookie:any){
    return await axios({
        method:'get',
        url:`${url}/${param}`,
        headers:{
            'cookie':cookie,
        },
        withCredentials:true,
    }).then(res=>res.data)
        .catch(e=>console.error(e));
}

export async function post(url:any,param:any,cookie:any){
    return axios({
        method:'post',
        url:`${url}/${param}`,
        headers:{
            'cookie':cookie,
        }
    }).then(res=>res.data)
        .catch(e=>console.error(e));
}

