import express from 'express';
import {
    fetchComments,
    fetchDanmaku,
    fetchVideoPlayUrl,
    fetchVideoType,
    fetchVideoInteract
} from "../api";
import {parseString} from "xml2js";
const router=express.Router();

router.get("/public/comments/av:aId",(req,res,next)=>{
    fetchComments(req.params.aId).then(data=>{
        const resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/public/danmaku/:oId", (req, res, next) => {
    fetchDanmaku(req.params.oId).then((xml) => {
        console.log(xml);
        parseString(xml, { explicitArray : false, trim: true } , (err, result) => {
            if (!err) {
                let resData = {
                    code: "1",
                    msg: "success",
                    data: []
                };
                if (result.i.d) {
                    result.i.d.forEach((item) => {
                        let p = item.$.p;
                        let attrs = p.split(",");
                        resData.data.push({
                            time: attrs[0],  // 时间
                            type: attrs[1],  // 类型
                            decimalColor: attrs[3],  // 十进制颜色
                            sendTime: attrs[4],   // 发送时间
                            content: item._,  // 内容
                            p
                        });
                    });
                }
                res.send(resData);
            } else {
                next(err);
            }
        });
    }).catch(next);
});

router.get("/public/videoPlayUrl/av:aid/cid=:cid",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchVideoPlayUrl(req.params.aid,req.params.cid,ret).then(xml=>{
        let str1=`<?xml version="1.0"?><bilibili>`;
        let str2=`</bilibili>`;
        let str=str1+xml+str2;
        parseString(str,{explicitArray : false, trim: true},(err,result)=>{
            if(!err){
                let resData = {
                    code: "1",
                    msg: "success",
                    data: []
                };
                resData.data.push(JSON.parse(result.bilibili.interaction));
                res.send(resData);
            }else{
                next(err);
            }
        })
    }).catch(next);
});

router.get("/public/videoType/av:aid/cid=:cid",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchVideoType(req.params.aid,req.params.cid,ret).then(xml=>{
        let str1=`<?xml version="1.0"?><bilibili>`;
        let str2=`</bilibili>`;
        let str=str1+xml+str2;
        parseString(str,{explicitArray : false, trim: true},(err,result)=>{
            if(!err){
                let resData = {
                    code: "1",
                    msg: "success",
                    data: []
                };
                resData.data.push(JSON.parse(result.bilibili.interaction));
                res.send(resData);
            }else{
                next(err);
            }
        })
    }).catch(next);
});
router.get("/public/interact/aid:aid/eid:eid/gvid:gvid",(req,res,next)=>{
    const cookies=req.cookies;
    let ret='';
    for(let it in cookies){
        ret+=encodeURIComponent(it)+'='+encodeURIComponent(cookies[it])+';'
    }
    fetchVideoInteract(req.params.aid,req.params.eid,req.params.gvid,ret).then(data=>{
        const resData={
            code:"1",
            msg:"success",
            data
        };
        res.send(resData);
    }).catch(next);
});

module.exports = router;
