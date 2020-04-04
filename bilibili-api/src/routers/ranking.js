import express from 'express';
import {fetchRankingPartition} from "../api";
const router=express.Router();

router.get("/ranking/rid=:rid/day=:day",(req,res,next)=>{
    // const rid=req.query.rid;
    // const day=req.query.day;
    fetchRankingPartition(req.params.rid,req.params.day).then((data)=>{
        let resData={
            code: "1",
            msg: "success"
        };
        if(data.code===0){
            resData.data=data.data
        }else{
            resData.code = "0";
            resData.msg = "fail";
        }
        res.send(resData);
    }).catch(next);
});

module.exports = router;
