// const prefix = process.env.URL_PREFIX;
// const prefix='http://127.0.0.1:2233';
const prefix='';
//bangumi
const URL_PLAYING_BANGUMI=prefix+"/bangumi";
const URL_ABOUT_BANGUMI=prefix+"/bangumi/media_md";
const URL_BANGUMI_SECTION=prefix+"/bangumi/section";

//live
const URL_LIVE_AREA = prefix + "/live/area";
const URL_LIVE_DATA = prefix + "/live/data";
const URL_LIVE_LIST = prefix + "/live/room/list";
const URL_LIVE_ROOM_INFO = prefix + "/live/room/info";
const URL_LIVE_ROOM_GIFT = prefix + "/live/room/gifts";
const URL_LIVE_PLAY_URL = prefix + "/live/room/play_url";
const URL_LIVE_DANMU_CONFIG = prefix + "/live/room/danmu_config";

//login
const URL_OAUTHKEY=prefix+"/login/getOauthKey";
const URL_IDENTIFY=prefix+"/login/getIdentifyKey";

//main
const URL_INDEX=prefix+"/index";
const URL_ROUND_SOWING=prefix+"/round-sowing";
const URL_PARTITION=prefix+"/partition";
const URL_LATEST_BANGUMI=prefix+"/latestBangumi";

//public
const URL_COMMENTS=prefix+"/public/comments";
const URL_DANMAKU=prefix+"/public/danmaku";
const URL_VIDEO_PLAY_URL=prefix+"/public/videoPlayUrl";
const URL_VIDEO_TYPE=prefix+"/public/videoType";
const URL_INTERACT_VIDEO=prefix+"/public/interact";

//ranking
const URL_RANKING=prefix+"/ranking";
const URL_RANKING_INDEX=prefix+"/ranking_index";

//search
const URL_SEARCH=prefix+"/search";
const URL_HOTWD=prefix+"/search/hotwd";

//upzhu
const URL_UPUSER_DATA=prefix+"/up";
const URL_MY_FOLLOW=prefix+"/up/myFollow";
const URL_TOP_VIDEO_FANS=prefix+"/up/videoForFans";
const URL_TOP_VIDEO_OTHERS=prefix+"/up/videoForOthers";
const URL_ALL_VIDEOS=prefix+"/up/allVideos";

//video
const URL_VIDEO_DETAIL=prefix+"/video";

export{
    URL_PLAYING_BANGUMI,
    URL_ABOUT_BANGUMI,
    URL_BANGUMI_SECTION,
    URL_LIVE_AREA,
    URL_LIVE_DATA,
    URL_LIVE_LIST,
    URL_LIVE_ROOM_INFO,
    URL_LIVE_ROOM_GIFT,
    URL_LIVE_PLAY_URL,
    URL_LIVE_DANMU_CONFIG,
    URL_OAUTHKEY,
    URL_IDENTIFY,
    URL_INDEX,
    URL_ROUND_SOWING,
    URL_PARTITION,
    URL_LATEST_BANGUMI,
    URL_COMMENTS,
    URL_DANMAKU,
    URL_VIDEO_PLAY_URL,
    URL_VIDEO_TYPE,
    URL_INTERACT_VIDEO,
    URL_RANKING,
    URL_RANKING_INDEX,
    URL_SEARCH,
    URL_HOTWD,
    URL_UPUSER_DATA,
    URL_MY_FOLLOW,
    URL_TOP_VIDEO_FANS,
    URL_TOP_VIDEO_OTHERS,
    URL_ALL_VIDEOS,
    URL_VIDEO_DETAIL
};
