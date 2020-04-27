import express from 'express';
import sql from 'mysql';
const router=express.Router();

const connection=sql.createConnection({
    hose:'localhost',
    user:'root',
    password:'123456',
    database:'bigdata',
    multipleStatements: true
});
connection.connect();
let data=[];
connection.query("select * from video order by num desc limit 10;select * from bangumi order by num desc limit 10;select * from search order by num desc limit 10",(err,res)=>{
    if(err)throw err;
    data=res;
});
router.get("/query",function(req,res,next){
    const resData={
        code: "1",
        msg: "success",
        data
    }
    console.log(data);
    res.send(resData)
});

module.exports=router;
