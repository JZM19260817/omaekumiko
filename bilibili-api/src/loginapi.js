import axios from 'axios';

// axios.defaults.withCredentials=true;

export const getOauthKey=()=>{
    return axios.get('https://passport.bilibili.com/qrcode/getLoginUrl')
        .then((res) => res.data.data);
};

export const identifyKey=(oauthKey)=>{
    return axios({
        url: 'https://passport.bilibili.com/qrcode/getLoginInfo',
        method: 'post',
        data: {
            oauthKey: oauthKey,
            gourl: 'https://www.bilibili.com'
        },
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET,POST'
        }
    }).then(res=>res)
};

// async function getMyUrl(){
//     const res=await getOauthKey();
//     return await tryUrl(res.oauthKey);
// }

// function changeIntoCookie(myUrl){
//     let str='';
//     for(let i=0;i<myUrl.length;i++){
//         str+=decodeURIComponent(myUrl[i].split(';')[0]);
//         if(i<myUrl.length-1){
//             str+=';';
//         }
//     }
//     return str;
// }

// async function getMyData(mycookie){
//     return await axios({
//         url: 'https://account.bilibili.com/home/userInfo',
//         method: 'get',
//         headers: {
//             referer: 'https://account.bilibili.com/home',
//             host: 'account.bilibili.com',
//             cookie: mycookie
//         }
//     }) .then(res => res.data);
// }

// async function tryUrl(oauthKey){
//     await identifyKey(oauthKey)
//         .then(async (res)=>{
//             if(res.data.status){
//                 const myCookie=res.headers;
//                 const cookie=changeIntoCookie(myCookie['set-cookie']);
//                 const myData=await getMyData(cookie);
//             }else{
//                 setTimeout(()=>{
//                     tryUrl(oauthKey);
//                 },2000);
//             }
//         });
// }

