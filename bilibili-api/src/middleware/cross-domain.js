module.exports = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT,DELETE,POST,GET");
    res.header("Access-Control-Max-Age",3600*24*30);
    next();
};
// const whiteList = process.env.WHITE_LIST.split(",");
//
// module.exports = (req, res, next) => {
//     const origin = req.get("Origin");
//     console.log("White:",whiteList);
//     console.log("Origin:",origin);
//     if (origin) {
//         const allowOrigin = whiteList.find((url) => origin.indexOf(url) !== -1);
//         if (allowOrigin) {
//             res.header("Access-Control-Allow-Origin", origin);
//             res.header("Access-Control-Allow-Headers", "Content-Type");
//             res.header("Access-Control-Allow-Methods","POST,GET,OPTIONS");
//         }
//     }
//     next();
// }
