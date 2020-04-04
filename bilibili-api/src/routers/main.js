import express from 'express';
import {
    fetchLatestBangumi,
    fetchMainPage,
    fetchMainRankingData,
    fetchPartitionData,
    fetchRoundSowing
}from "../api";
const router=express.Router();

//首页列表
router.get("/index",(req, res, next)=>{
    console.log('cookie:',req.cookies);
    fetchMainPage().then((data)=>{
        const resData = {
            code: "1",
            msg: "success",
            data
        };
        res.send(resData);
    }).catch(next);
});

// 首页轮播图
router.get("/round-sowing", (req, res, next) => {
    fetchRoundSowing().then((data) => {
        let resData = {
            code: "1",
            msg: "success"
        };
        if (data.code === 0) {
            resData.data = data.data;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        res.send(resData);
    }).catch(next);
});

// mainranking
router.get("/mainranking", (req, res, next) => {
    fetchMainRankingData().then((data) => {
        const resData = {
            code: "1",
            msg: "success",
            data
        };
        res.send(resData);
    }).catch(next);
});

router.get("/partition", (req, res, next) => {
    console.log('cookie:',req.cookies);
    fetchPartitionData().then((data) => {
        const resData = {
            code: "1",
            msg: "success",
            data
        };
        res.send(resData);
    }).catch(next);
});

//fenlei

router.get("/latestBangumi",(req,res,next)=>{
    fetchLatestBangumi().then(data=>{
        const resData = {
            code: "1",
            msg: "success",
            data
        };
        res.send(resData);
    }).catch(next);
});

module.exports = router;
