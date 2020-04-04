import {AnyAction, Dispatch} from "redux";
import * as Login from "../../api/login";
import * as User from "../../api/up-users";
import ReactCookies from 'react-cookies';
import {setShouldLogin} from "../actions";

const defaultLogin = {
    userName: '',
    userAvater: '',
    userUID: '',
    userCookie: '',
    isLogin: false,
};

function setCookie(myUrl) {
    for (let i = 0; i < myUrl.length; i++) {
        console.log('cookie:',(myUrl[i].split(';')[0]).split("=")[0],"  ",(myUrl[i].split(';')[0]).split("=")[1],);
        ReactCookies.save((myUrl[i].split(';')[0]).split("=")[0],
            (myUrl[i].split(';')[0]).split("=")[1]);
    }
}

function getUID(myUrl) {
    return (myUrl[1].split(';')[0]).split('=')[1];
}
let timer;

export async function tryLogin(oauthKey, dispatch) {
    const res = await Login.fetchIdentify(oauthKey);
    if (res.code === "1") {
        clearTimeout(timer);
        setCookie(res.data);
        const UID = getUID(res.data);
        const userBasicData=await User.fetchUpUserData(UID,'');
        const hasLogin = {
            userName: userBasicData.data.data.name,
            userAvater: userBasicData.data.data.face,
            userUID: UID,
            userCookie: '',
            isLogin: true,
        };
        console.log(hasLogin);
        // return hasLogin;
        dispatch(setShouldLogin(hasLogin))
    } else {
        timer=setTimeout(() => tryLogin(oauthKey, dispatch), 2000);
    }
}
export  const clearT=()=>{
    clearTimeout(timer)
}
export const logout = () => {
    return dispatch => {
        dispatch(setShouldLogin(defaultLogin));
    }
};
