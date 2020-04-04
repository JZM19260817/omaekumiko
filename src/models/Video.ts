//@ts-nocheck
import {PartitionType} from "./PartitionType";

// const a = {
//     "code": "1", "msg": "success", "data": {
//         "playingMedia": "",
//         "reduxAsyncConnect": {
//             "videoInfo": {
//                 "bvid": "BV17x411w7KC",
//                 "aid": 170001,
//                 "videos": 10,
//                 "tid": 193,
//                 "tname": "MV",
//                 "copyright": 2,
//                 "pic": "http://i2.hdslb.com/bfs/archive/1ada8c32a9d168e4b2ee3e010f24789ba3353785.jpg",
//                 "title": "【MV】保加利亚妖王AZIS视频合辑",
//                 "pubdate": 1320850533,
//                 "ctime": 1497380562,
//                 "desc": "sina 保加利亚超级天王 Azis1999年出道。他的音乐融合保加利亚名族曲风chalga和pop、rap等元素，不过他惊艳的易装秀与浮夸的角色诠释才是他最为出名的地方 Azis与众多保加利亚天王天后级歌手都有过合作.06年，他作为Mariana Popova的伴唱，在欧洲半决赛上演唱了他们的参赛曲Let Me Cry 06年他被Velikite Balgari评为保加利亚有史以来最伟大的名人之一",
//                 "state": 0,
//                 "attribute": 2130003,
//                 "duration": "00:40:12",
//                 "rights": {
//                     "bp": 0,
//                     "elec": 0,
//                     "download": 1,
//                     "movie": 0,
//                     "pay": 0,
//                     "hd5": 0,
//                     "no_reprint": 0,
//                     "autoplay": 1,
//                     "ugc_pay": 0,
//                     "is_cooperation": 0,
//                     "ugc_pay_preview": 0,
//                     "no_background": 0
//                 },
//                 "owner": {
//                     "mid": 122541,
//                     "name": "冰封.虾子",
//                     "face": "http://i1.hdslb.com/bfs/face/40c46ee74dd6ea33d46c38cd6083e6a1286aa482.gif"
//                 },
//                 "dynamic": "",
//                 "cid": 279786,
//                 "dimension": {"width": 0, "height": 0, "rotate": 0},
//                 "no_cache": false,
//                 "pages": [{
//                     "cid": 279786,
//                     "page": 1,
//                     "from": "vupload",
//                     "part": "Хоп",
//                     "duration": 199,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 275431,
//                     "page": 2,
//                     "from": "vupload",
//                     "part": "Imash li surce",
//                     "duration": 205,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 279787,
//                     "page": 3,
//                     "from": "vupload",
//                     "part": "No Kazvam Ti Stiga",
//                     "duration": 308,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 280467,
//                     "page": 4,
//                     "from": "vupload",
//                     "part": "Samo za teb",
//                     "duration": 273,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 280468,
//                     "page": 5,
//                     "from": "vupload",
//                     "part": "Tochno sega",
//                     "duration": 241,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 280469,
//                     "page": 6,
//                     "from": "vupload",
//                     "part": "Kak boli",
//                     "duration": 336,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 274491,
//                     "page": 7,
//                     "from": "vupload",
//                     "part": "Obicham Te",
//                     "duration": 250,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 267410,
//                     "page": 8,
//                     "from": "vupload",
//                     "part": "Mrazish",
//                     "duration": 201,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 267714,
//                     "page": 9,
//                     "from": "vupload",
//                     "part": "Няма накъде",
//                     "duration": 201,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }, {
//                     "cid": 270380,
//                     "page": 10,
//                     "from": "vupload",
//                     "part": "Gadna poroda",
//                     "duration": 198,
//                     "vid": "",
//                     "weblink": "",
//                     "dimension": {"width": 0, "height": 0, "rotate": 0}
//                 }],
//                 "subtitle": {"allow_submit": false, "list": []},
//                 "originTitle": "【MV】保加利亚妖王AZIS视频合辑",
//                 "reid": null,
//                 "initUrl": "//upos-sz-mirrorcos.bilivideo.com/upgcxcode/86/97/279786/279786-1-16.mp4?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1585546672&gen=playurl&os=cosbv&oi=992573232&trid=1a932de6db6f4da287cacd1d30ad464dh&platform=html5&upsig=017ce294982ed0bb6e6f449756f1947c&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,platform&mid=0",
//                 "status": "normal",
//                 "initCid": 279786,
//                 "initDuration": 199,
//                 "initPage": 1
//             }
//         }
//     }
// }
class Video{
    constructor(
        public bvid:string,
        public aid:any,
        public videos:number,
        public pages:[],
        public pic:string,
        public title:string,
        public desc:string,
        public view:number,
        public pubdate:number,
        public duration:any,
        public cid:number,
        public url:string,
        public owner: {}
    ){}
};

export{
    Video,
}
