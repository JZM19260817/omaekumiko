import express from "express";
import {fetchHotWord,fetchSearchContent} from "../api";
const router=express.Router();

router.get("/search/hotwd",(req,res,next)=>{
   fetchHotWord().then(data=>{
       let resData = {
           code: "1",
           msg: "success",
           data
       };
       res.send(resData);
   }).catch(next)
});

router.get("/search/keyword=:keywd&page=:pg&pagesize=:pgsize&search_type=:stype&order=:order",(req,res,next)=>{
    let keywd=req.params.keywd;
    let pg=req.params.pg;
    let pgsize=req.params.pgsize;
    let stype=req.params.stype;
    let order=req.params.order;
    fetchSearchContent(encodeURI(keywd),pg,pgsize,stype,order).then(data=>{
        let resData = {
            code: "1",
            msg: "success",
            data
        };
        console.log(resData);
        res.send(resData);
    }).catch(next);
});

module.exports = router;
