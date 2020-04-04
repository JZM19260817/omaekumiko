import express from 'express';
import bangumiRouter from './bangumi';
import liveRouter from './live';
import loginRouter from './login';
import mainRouter from './main';
import rankingRouter from './ranking';
import searchRouter from './search';
import transferRouter from './transfer';
import upUserRouter from './up-users';
import videoRouter from './video';
import publicRouter from './public';
const router=express.Router();

router.use(bangumiRouter);
router.use(liveRouter);
router.use(loginRouter);
router.use(mainRouter);
router.use(rankingRouter);
router.use(searchRouter);
router.use(transferRouter);
router.use(upUserRouter);
router.use(videoRouter);
router.use(publicRouter);

module.exports = router;
