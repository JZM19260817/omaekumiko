import express from "express";
import {writeFile} from './writeFiles';
import{
    fetchUserData,
    fetchTopVideoForFans,
    fetchTopVideoForOthers,
    fetchAllMyVideo,
    fetchMyFollow
}from "../api";
const router=express.Router();

router.get("/up/:uId",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    console.log(req.params);
    fetchUserData(req.params.uId,ret).then(data=>{
        const resData={
            code: "1",
            msg: "success",
            data
        };
        res.send(resData);
        return data.data;
    }).then(res=>writeFile(res,'upuser'))
        .catch(next);
});

router.get("/up/myFollow/:uId",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchMyFollow(req.params.uId,ret).then(data=>{
        let resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/up/videoForFans/:uId",(req,res,next)=>{
    // const param={
    //     uId:req.query.uId,
    //     ps:req.query.ps,
    // };
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchTopVideoForFans(req.params.uId,ret).then(data=>{
        let resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/up/videoForOthers/:uId",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
   fetchTopVideoForOthers(req.params.uId,ret).then(data=>{
        let resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/up/allVideos/:uId/:ps",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchAllMyVideo(req.params.uId,req.params.ps,ret).then(data=>{
        let resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

module.exports = router;
