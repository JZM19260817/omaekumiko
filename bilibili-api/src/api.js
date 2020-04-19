//+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s+1s
import axios from 'axios';
import getInitialStateFromHTML from './util'
axios.defaults.withCredentials=true;
//主站
const URL_INDEX="https://www.bilibili.com";
const URL_INDEX_MOBILE="https://m.bilibili.com/index.html"
//主站分区排行
const URL_MAIN_RANKING = "https://m.bilibili.com/ranking.html";
//排行榜 rid分区，day最近几天(3,7)
const URL_RANKING_PARTITION ="https://api.bilibili.com/x/web-interface/ranking/region?rid={rid}&day={day}";
const URL_RANKING="https://api.bilibili.com/x/web-interface/ranking?rid=0&day=3";
//首页轮播
const URL_ROUND_SOWING = "https://api.bilibili.com/x/web-show/res/loc?pf=7&id=1695";
//热搜
const URL_HOT_WORD = "https://s.search.bilibili.com/main/hotword";
//搜索
// const URL_SEARCH="https://api.bilibili.com/x/web-interface/search/all/v2";
const URL_SEARCH="https://api.bilibili.com/x/web-interface/search/all/v2?keyword={keywd}&page={pg}&pagesize={pgsize}&search_type={stype}&order={order}";
const URL_SEARCH_1="https://api.bilibili.com/x/web-interface/search/type?keyword={keywd}&page={pg}&pagesize={pgsize}&search_type={stype}&order={order}";
/**视频详情 aid是视频id(手机版接口统一)
 * 用URL_VIDEO_DETAIL查询出aid和cid
 *把aid和cid放进URL_VIDEO_PLAYURL里面查询播放地址
 * 把aid和cid放进URL_VIDEO_TYPE里面查询是什么视频（普通视频还是互动视频）(返回XML)
 * 互动视频有个graph_version参数是视频id（json）
 *互动视频的参数：aid：av号，edge_id：节点编号，1为开头（json）
 * 旧版下面接新版API，B站于2020年3月23更新
 */
const URL_VIDEO_DETAIL="https://m.bilibili.com/video/av{aid}?p={p}";
const URL_VIDEO_DETAIL_NEW="https://m.bilibili.com/video/BV1k7411R7kj";//（BV1k7411R7kj是一个整体）
const URL_VIDEO_PLAYURL="https://api.bilibili.com/x/player/playurl?cid={cid}&qn=1&type=&otype=json&avid={aid}";
const URL_VIDEO_PLAYURL_NEW="https://api.bilibili.com/x/player/playurl?cid={cid}&qn=1&type=&otype=json&avid={aid}";
const URL_VIDEO_PAGELIST="https://api.bilibili.com/x/player/pagelist?bvid={bvid}&jsonp=jsonp";
const URL_VIDEO_TYPE="https://api.bilibili.com/x/player.so?id=cid%3A{cid}&aid={av}";
const URL_VIDEO_TYPE_NEW="https://api.bilibili.com/x/player.so?id=cid%3A{cid}&bvid={bvid}";
const URL_INTERACT_VIDEO="https://api.bilibili.com/x/stein/edgeinfo_v2?aid={aid}&bvid=&edge_id={eid}&graph_version={gvid}";
const URL_INTERACT_VIDEO_NEW="https://api.bilibili.com/x/stein/edgeinfo_v2?aid={aid}&bvid=&edge_id={eid}&graph_version={gvid}";

//番剧（时间线）点进去就放
const URL_VIDEO_BANGUMI="https://bangumi.bilibili.com/api/timeline_v2_global";
//视频弹幕
const URL_DANMAKU="https://api.bilibili.com/x/v1/dm/list.so?oid={oid}";
// 用户基本信息
const URL_UP_USER_STATUS = "https://api.bilibili.com/x/space/acc/info?mid={uid}&jsonp=jsonp";
//用户顶置视频
const URL_TOP_VIDEO="https://api.bilibili.com/x/space/top/arc?vmid={uid}&jsonp=jsonp";
const URL_TOP_VIDEO_GUEST="https://api.bilibili.com/x/space/masterpiece?vmid={uid}&jsonp=jsonp";
//用户上传的视频
const URL_USER_UP_VIDER="https://api.bilibili.com/x/space/arc/search?mid={uid}&pn=1&ps={ps}&jsonp=jsonp";
//我的关注
const URL_USER_FOLLOW="https://api.vc.bilibili.com/dynamic_svr/v1/dynamic_svr/dynamic_new?uid={uid}&type=2&from=header";
//正在播放的番剧__PGC_USERSTATE__判断大会员<script>1，__playinfo__当前p资料2，__BILI_CONFIG__不知3，__INITIAL_STATE__番剧状态4
export const URL_PLAYING_BANGUMI="https://www.bilibili.com/bangumi/play/ep{ep}";
//番剧详情页
const URL_BANGUMI_DETAIL="https://www.bilibili.com/bangumi/media/md{md}";
const URL_BANGUMI_SECTION="https://api.bilibili.com/pgc/web/season/section?season_id={sid}";//当季的每一P

//直播首页
const URL_LIFE_INDEX="https://api.live.bilibili.com/room/v2/AppIndex/getAllList";
// 分类
const URL_LIVE_AREA = "https://api.live.bilibili.com/room/v1/AppIndex/getAreas?device=phone&platform=ios&scale=3&build=1000";
// 直播地址
const URL_LIVE_URL = "https://api.live.bilibili.com/room/v1/Room/playUrl?cid={roomid}&platform=h5&otype=json&quality=0";
// 礼物
const URL_LIVE_GIFT = "https://api.live.bilibili.com/appIndex/getAllItem?scale=1";
// 房间列表
const URL_ROOM_LIST = "https://api.live.bilibili.com/room/v2/Area/getRoomList";
// 房间信息
const URL_ROOM_INFO = "https://api.live.bilibili.com/room/v1/Room/get_info?device=phone&platform=ios&scale=3&build=10000&room_id={roomid}";
// 弹幕配置
const URL_DANMMU_CONFIG = "https://api.live.bilibili.com/room/v1/Danmu/getConf?room_id={roomid}&platform=h5";
//评论区
const URL_VIDEO_COMMENT="https://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid={aid}&sort=0";

export const userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36";

//主页推荐__ADdata__
export const fetchMainPage = () => {
    return axios({
        url:URL_INDEX,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>{
        const data=res.data;
        return JSON.parse(getInitialStateFromHTML(data,0,'__ADdata__'));
    });
};
//获取分区
export const fetchPartitionData=()=>{
    return axios({
        url:URL_INDEX_MOBILE,
        headers: {
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        }
    }).then(res=>{
        return JSON.parse(getInitialStateFromHTML(res.data,2,"__INITIAL_STATE__").split(";")[0]);
    })
};

//主页各分区的排行榜
export const fetchMainRankingData=()=>{
    return axios({
        url:URL_MAIN_RANKING,
        headers: {
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
        }
    }).then(res=>{
        return JSON.parse(getInitialStateFromHTML(res.data,2,"__INITIAL_STATE__").split(";")[0]);
    })
};

//查看排行榜
export const fetchRankingIndex=()=>{
    return axios({
        url:URL_RANKING,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};
export const fetchRankingPartition=(rid,day)=>{
    return axios({
        url:URL_RANKING_PARTITION.replace("{rid}",rid).replace("{day}",day),
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//获取轮播图片
export const fetchRoundSowing = () => {
    return axios({
        url:URL_ROUND_SOWING,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//热搜
export const fetchHotWord = () => {
    return axios({
        url:URL_HOT_WORD,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//搜索  keywd是encodeURI
export const fetchSearchContent=(keywd,page,pgsize,stype,order)=>{
    const url=(stype==='all'&&order==='totalrank')?URL_SEARCH:URL_SEARCH_1;
    console.log(url);
    return axios({
        url:url.replace("{keywd}",keywd).replace("{pg}",page).replace("{pgsize}",pgsize)
            .replace("{stype}",stype).replace("{order}",order),
        headers:{
            "User-Agent":userAgent,
        }
    }).then(res=>res.data);
};

//直播列表
export const fetchLiveList = () => {
    return axios({
        url:URL_LIFE_INDEX,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//获取直播地址
export const fetchLiveUrl = (roomId) => {
    return axios({
        url:URL_LIVE_URL.replace("{roomid}", roomId),
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//获取直播分类
export const fetchLiveArea=()=>{
    return axios({
        url:URL_LIVE_AREA,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//直播礼物
export const fetchLiveGift = () => {
    return axios({
        url:URL_LIVE_GIFT,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//获取房间列表
export const fetchRoomList = () => {
    return axios({
        url:URL_ROOM_LIST,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//房间信息
export const fetchRoomInfo = (roomId) => {
    return axios({
        url:URL_ROOM_INFO.replace("{roomid}", roomId),
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//直播弹幕
export const fetchDanMuConfig = (roomId) => {
    return axios({
        url:URL_DANMMU_CONFIG.replace("{roomid}", roomId),
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//获取视频信息__INITIAL_STATE__
export const fetchVideoData=(aid,p,cookie)=>{
    return axios({
        url:URL_VIDEO_DETAIL.replace("{aid}",aid).replace("{p}",p),
        headers:{
            "User-Agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
            'host':'m.bilibili.com',
            'cookie':cookie
        }
    }).then(res=>{
        const data=res.data;
        // const tmp=getInitialStateFromHTML(data,4,'__INITIAL_STATE__');
        const tmp=getInitialStateFromHTML(data,2,'__INITIAL_STATE__');
        return JSON.parse(tmp.split(";")[0]);
    });
};
export const fetchVideoPlayUrl=(aid,cid,cookie)=>{
    return axios({
        url:URL_VIDEO_PLAYURL.replace("{aid}",aid).replace("{cid}",cid),
        headers:{
            "User-Agent":userAgent,
            "cookie":cookie
        }
    }).then(res=>res.data)
};
export const fetchVideoType=(aid,cid,cookie)=>{
    console.log(URL_VIDEO_TYPE.replace("{av}",aid).replace("{cid}",cid));
    return axios({
        url:URL_VIDEO_TYPE.replace("{av}",aid).replace("{cid}",cid),
        headers:{
            "User-Agent":userAgent,
            "Referer":"https://www.bilibili.com",
            "Origin":"https://www.bilibili.com",
            "cookie":cookie
        }
    }).then(res=>res.data)
};
export const fetchVideoInteract=(aid,eid,gvid,cookie)=>{
    return axios({
        url:URL_INTERACT_VIDEO.replace("{aid}",aid).replace("{eid}",eid).replace("{gvid}",gvid),
        headers:{
            "User-Agent":userAgent,
            "cookie":cookie
        }
    }).then(res=>res.data)
};

//视频弹幕
export const fetchDanmaku=(oid)=> {
    return axios({
        url: URL_DANMAKU.replace("{oid}",oid),
        headers: {
            "User-Agent": userAgent,
            "Accept-Encoding":'gzip,deflate,br'
        }
    }).then(res => res.data);
};

//视频评论区
export const fetchComments=(aid)=>{
    return axios({
        url:URL_VIDEO_COMMENT.replace("{aid}",aid),
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//最近番剧
export const fetchLatestBangumi=()=>{
    return axios({
        url:URL_VIDEO_BANGUMI,
        headers:{
            "User-Agent":userAgent
        }
    }).then(res=>res.data);
};

//番剧的一系列操作，包括判断大会员1，当前p2，__BILI_CONFIG__3，番剧状态4,番剧详情
export const fetchBangumiCanWatch=(res)=>{
    return JSON.parse(getInitialStateFromHTML(res.data,1,"__PGC_USERSTATE__"));
};
export const fetchCurrentP=(res)=>{
    return JSON.parse(getInitialStateFromHTML(res.data,2,"__playinfo__"));
};

export const fetchThisBangumi=(res)=>{
    const initState=(getInitialStateFromHTML(res.data,4,"__INITIAL_STATE__")).split(";");
    return JSON.parse(initState[0]);
};
export const fetchBangumiDetail=(res)=>{
    return getInitialStateFromHTML(res.data,1,"__INITIAL_STATE__");
};
export const fetchAboutBangumi=(md,cookie)=>{
    axios({
        url:URL_BANGUMI_DETAIL.replace("{md}",md),
        headers:{
            "User-Agent":userAgent,
            "cookie":cookie
        }
    }).then(res=>{
        const tmp=getInitialStateFromHTML(res.data,1,'__INITIAL_STATE__');
        return JSON.parse(tmp.split(";")[0]);
    })
};
export const fetchBangumiSection=(sid,cookie)=>{
    return axios({
        url:URL_BANGUMI_SECTION.replace("{sid}",sid),
        headers:{
            "User-Agent":userAgent,
            "cookie":cookie
        }
    }).then(res=>res.data);
}
//用户操作，基本信息，顶置视频，所有视频
export const fetchUserData=(uid,cookie)=>{
    return axios({
        url:URL_UP_USER_STATUS.replace("{uid}",uid),
        headers:{
            "User-Agent":userAgent,
            'cookie':cookie
        }
    }).then(res=>res.data)
};
export const fetchTopVideoForFans=(uid, cookie)=>{
    return axios({
        url:URL_TOP_VIDEO.replace("{uid}",uid),
        headers:{
            "User-Agent":userAgent,
            'cookie':cookie
        }
    }).then(res=>res.data);
};
export const fetchTopVideoForOthers=(uid, cookie)=>{
    return axios({
        url:URL_TOP_VIDEO_GUEST.replace("{uid}",uid),
        headers:{
            "User-Agent":userAgent,
            'cookie':cookie
        }
    }).then(res=>res.data);
};
export const fetchAllMyVideo=(uid, ps, cookie)=>{
    return axios({
        url:URL_USER_UP_VIDER.replace("{uid}",uid).replace("{ps}",ps),
        headers:{
            "User-Agent":userAgent,
            'cookie':cookie
        }
    }).then(res=>res.data);
};
export const fetchMyFollow=(uid, cookie)=>{
    return axios({
        url:URL_USER_FOLLOW.replace("{uid}",uid),
        headers:{
            "User-Agent":userAgent,
            'cookie':cookie
        }
    }).then(res=>res.data);
};
