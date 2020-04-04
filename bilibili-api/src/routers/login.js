import express from  'express';
import {
    getOauthKey,
    identifyKey
}from "../loginapi";
const router=express.Router();

router.get("/login/getOauthKey",(req,res,next)=>{
    console.log(req);
    getOauthKey().then((data)=>{
        const resData = {
            code: "1",
            msg: "success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/login/getIdentifyKey/:oauthKey",(req,res,next)=>{
    identifyKey(req.params.oauthKey).then((data)=>{
        let resData;
        if(data.data.status){
            resData = {
                code: "1",
                msg: "success",
                data:data.headers['set-cookie']
            };
        }else{
            resData = {
                code: "-1",
                msg: "fail",
                data:data.data
            };
        }
        console.log("resdata:",resData);
        res.send(resData);
    }).catch(next);
});
module.exports = router;
