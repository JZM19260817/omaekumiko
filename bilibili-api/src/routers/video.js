import express from 'express';
import {
    fetchVideoData,
}from "../api"
const router=express.Router();

router.get("/video/av:aId/p:p",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchVideoData(req.params.aId,req.params.p,ret).then(data=>{
        const resData={
            code:"1",
            msg:"success",
            data
        };
        // const initUrl=resData.data.reduxAsyncConnect.videoInfo.initUrl;
        res.send(resData);
    }).catch(next);
});

module.exports = router;
