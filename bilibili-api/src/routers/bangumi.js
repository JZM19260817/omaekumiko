import express from 'express';
import axios from 'axios';
import cookieParser from 'cookie-parser';
import{
    URL_PLAYING_BANGUMI,
    userAgent,
    fetchBangumiCanWatch,
    fetchCurrentP,
    fetchThisBangumi,
    fetchBangumiDetail,
    fetchAboutBangumi,
    fetchBangumiSection
}from '../api';
import {writeFile} from "./writeFiles";
const router=express.Router();
router.use(cookieParser());

router.get("/bangumi/ep:ep",(req,res,next)=>{
    const ep=req.params.ep;
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    console.log('ret:',ret);
    axios({
        url:URL_PLAYING_BANGUMI.replace("{ep}",ep),
        headers:{
            "User-Agent":userAgent,
            'host':'www.bilibili.com',
            'cookie':ret
        }
    }).then(data=>{
        const resData={
            code: "1",
            msg: "success",
            canWatch:fetchBangumiCanWatch(data),
            currentP:fetchCurrentP(data),
            thisBangumi:fetchThisBangumi(data),
            // bangumiDetail:fetchBangumiDetail(data),
        };
        res.send(resData);
        const bigData={
            'user':cookies.DedeUserID,
            'name':resData.thisBangumi.mediaInfo.title,
        }
        return bigData;
    }).then(res=>writeFile(res,'bangumi'))
        .catch(next);
});

router.get("/bangumi/media_md/md:mId",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchAboutBangumi(req.params.mId,ret).then(data=>{
        const resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/bangumi/section/sid:sid",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchBangumiSection(req.params.sid,ret).then(data=>{
        const resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});
module.exports = router;
