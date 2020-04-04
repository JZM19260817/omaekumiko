//分类
// const a = {
//     "code": "1", "msg": "success", "data": {
//         "playingMedia": "",
//         "reduxAsyncConnect": {
//             "loaded": true,
//             "loadState": {"additionalContent": {"loading": false, "loaded": true, "error": null}},
//             "additionalContent": null
//         },
//         "authInfo": "",
//         "listInfo": "",
//         "audioReducer": null,
//         "audiolistReducer": null,
//         "experiment": "",
//         "abserver": null,
//         "videoReducer": null,
//         "videoTag": "",
//         "rankingInfo": 0,
//         "keywordInfo": "",
//         "pageTitle": "",
//         "partitionList": {
//             "0": [{"tid": 1, "typename": "动画"}, {"tid": 13, "typename": "番剧"}, {
//                 "tid": 167,
//                 "typename": "国创"
//             }, {"tid": 3, "typename": "音乐"}, {"tid": 129, "typename": "舞蹈"}, {"tid": 36, "typename": "科技"}, {
//                 "tid": 188,
//                 "typename": "数码"
//             }, {"tid": 4, "typename": "游戏"}, {"tid": 5, "typename": "娱乐"}, {"tid": 119, "typename": "鬼畜"}, {
//                 "tid": 23,
//                 "typename": "电影"
//             }, {"tid": 11, "typename": "电视剧"}, {"tid": 177, "typename": "纪录片"}, {
//                 "tid": 181,
//                 "typename": "影视"
//             }, {"tid": 155, "typename": "时尚"}, {"tid": 160, "typename": "生活"}, {"tid": 165, "typename": "广告"}],
//             "1": [{"tid": 24, "typename": "MAD·AMV"}, {"tid": 25, "typename": "MMD·3D"}, {
//                 "tid": 47,
//                 "typename": "短片·手书·配音"
//             }, {"tid": 27, "typename": "综合"}, {"tid": 86, "typename": "特摄"}],
//             "3": [{"tid": 28, "typename": "原创音乐"}, {"tid": 31, "typename": "翻唱"}, {
//                 "tid": 30,
//                 "typename": "VOCALOID·UTAU"
//             }, {"tid": 194, "typename": "电音"}, {"tid": 59, "typename": "演奏"}, {"tid": 29, "typename": "MV"}, {
//                 "tid": 54,
//                 "typename": "音乐现场"
//             }, {"tid": 130, "typename": "音乐综合"}],
//             "4": [{"tid": 17, "typename": "单机游戏"}, {"tid": 171, "typename": "电子竞技"}, {
//                 "tid": 172,
//                 "typename": "手机游戏"
//             }, {"tid": 65, "typename": "网络游戏"}, {"tid": 173, "typename": "桌游棋牌"}, {
//                 "tid": 121,
//                 "typename": "GMV"
//             }, {"tid": 136, "typename": "音游"}, {"tid": 19, "typename": "Mugen"}],
//             "5": [{"tid": 71, "typename": "综艺"}, {"tid": 137, "typename": "明星"}, {"tid": 131, "typename": "Korea相关"}],
//             "11": [{"tid": 185, "typename": "国产剧"}, {"tid": 187, "typename": "海外剧"}],
//             "13": [{"tid": 33, "typename": "连载动画"}, {"tid": 32, "typename": "完结动画"}, {
//                 "tid": 51,
//                 "typename": "资讯"
//             }, {"tid": 152, "typename": "官方延伸"}],
//             "23": [{"tid": 147, "typename": "华语电影"}, {"tid": 145, "typename": "欧美电影"}, {
//                 "tid": 146,
//                 "typename": "日本电影"
//             }, {"tid": 83, "typename": "其他国家"}],
//             "36": [{"tid": 124, "typename": "趣味科普人文"}, {"tid": 122, "typename": "野生技术协会"}, {
//                 "tid": 39,
//                 "typename": "演讲•公开课"
//             }, {"tid": 96, "typename": "星海"}, {"tid": 98, "typename": "机械"}, {"tid": 176, "typename": "汽车"}],
//             "119": [{"tid": 22, "typename": "鬼畜调教"}, {"tid": 26, "typename": "音MAD"}, {
//                 "tid": 126,
//                 "typename": "人力VOCALOID"
//             }, {"tid": 127, "typename": "教程演示"}],
//             "129": [{"tid": 20, "typename": "宅舞"}, {"tid": 154, "typename": "舞蹈综合"}, {
//                 "tid": 156,
//                 "typename": "舞蹈教程"
//             }, {"tid": 198, "typename": "街舞"}, {"tid": 199, "typename": "明星舞蹈"}, {"tid": 200, "typename": "中国舞"}],
//             "155": [{"tid": 157, "typename": "美妆"}, {"tid": 158, "typename": "服饰"}, {
//                 "tid": 164,
//                 "typename": "健身"
//             }, {"tid": 159, "typename": "T台"}, {"tid": 192, "typename": "风尚标"}],
//             "160": [{"tid": 138, "typename": "搞笑"}, {"tid": 21, "typename": "日常"}, {
//                 "tid": 76,
//                 "typename": "美食圈"
//             }, {"tid": 75, "typename": "动物圈"}, {"tid": 161, "typename": "手工"}, {
//                 "tid": 162,
//                 "typename": "绘画"
//             }, {"tid": 163, "typename": "运动"}, {"tid": 174, "typename": "其他"}],
//             "165": [{"tid": 166, "typename": "广告"}],
//             "167": [{"tid": 153, "typename": "国产动画"}, {"tid": 168, "typename": "国产原创相关"}, {
//                 "tid": 169,
//                 "typename": "布袋戏"
//             }, {"tid": 170, "typename": "资讯"}],
//             "177": [{"tid": 37, "typename": "人文·历史"}, {"tid": 178, "typename": "科学·探索·自然"}, {
//                 "tid": 179,
//                 "typename": "军事"
//             }, {"tid": 180, "typename": "社会·美食·旅行"}],
//             "181": [{"tid": 182, "typename": "影视杂谈"}, {"tid": 183, "typename": "影视剪辑"}, {
//                 "tid": 85,
//                 "typename": "短片"
//             }, {"tid": 184, "typename": "预告·资讯"}],
//             "188": [{"tid": 95, "typename": "手机平板"}, {"tid": 189, "typename": "电脑装机"}, {
//                 "tid": 190,
//                 "typename": "摄影摄像"
//             }, {"tid": 191, "typename": "影音智能"}]
//         },
//         "tagInfo": "",
//         "tagVideos": "",
//         "tagSimilar": "",
//         "userStatus": "",
//         "status": "",
//         "forbidden": false,
//         "videoState": "init",
//         "gameMode": ""
//     }
// }
//data.partitionList

class PartitionType {
    constructor(public id: number, public name: string, public children: PartitionType[] = []) {
    }
}

function createPartitionTypes(data): PartitionType[] {
    return data.map((item) => new PartitionType(item.tid, item.typename));
}

function createPartitionTypeTree(data) {
    if (data) {
        let partitionTypes=[];
        const firstTypes=data["0"];
        if(firstTypes){
            partitionTypes=firstTypes.map((item)=>{
                const tid=item.tid;
                const typename=item.typename;
                const children=createPartitionTypes(data[""+tid]);
                return new PartitionType(tid,typename,children);
            });
        }
        return partitionTypes;
    }
}

export{
    PartitionType,
    createPartitionTypes,
    createPartitionTypeTree
}
