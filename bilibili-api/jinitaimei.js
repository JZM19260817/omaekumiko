//互动视频

//保存节点
// https://api.bilibili.com/x/stein/edgeinfo_v2?aid=88288634&bvid=&graph_version=145971&platform=pc&portal=0&screen=0&buvid=CD752CCE-A7EC-42A0-8D11-165E9994A48353932infoc

// 查询特征
//https://api.bilibili.com/x/player.so?id=cid%3A150650784&aid=88288634
//请求头
// "User-Agent":userAgent,
// "Referer":"https://www.bilibili.com/video/av88288634",
// "Origin":"https://www.bilibili.com"

//
const a = {
    "code": 0, "message": "0", "ttl": 1, "data": {
        "title": "开头",
        "edge_id": 1,
        "story_list": [{
            "node_id": 1,
            "edge_id": 1,
            "title": "开头",
            "cid": 150650784,
            "start_pos": 29000,
            "cover": "http://i0.hdslb.com/bfs/steins-gate/150650784_screenshot.jpg",
            "is_current": 1,
            "cursor": 0
        }, {
            "node_id": 5174866,
            "edge_id": 5174866,
            "title": "推动剧情",
            "cid": 150696996,
            "start_pos": 21000,
            "cover": "http://i0.hdslb.com/bfs/steins-gate/150696996_screenshot.jpg",
            "cursor": 3
        }, {
            "node_id": 5174868,
            "edge_id": 5174868,
            "title": "1p-受伤",
            "cid": 150651065,
            "start_pos": 13000,
            "cover": "http://i0.hdslb.com/bfs/steins-gate/150651065_screenshot.jpg",
            "cursor": 4
        }, {
            "node_id": 5174869,
            "edge_id": 5174869,
            "title": "1p-A.",
            "cid": 150652345,
            "start_pos": 11000,
            "cover": "http://i0.hdslb.com/bfs/steins-gate/150652345_screenshot.jpg",
            "cursor": 5
        }],
        "edges": {
            "dimension": {"width": 1920, "height": 1080, "rotate": 0, "sar": ""},
            "questions": [{
                "id": 0,
                "type": 1,
                "start_time_r": 300,
                "duration": -1,
                "pause_video": 1,
                "title": "",
                "choices": [{
                    "id": 5174865,
                    "platform_action": "JUMP 5174865 150696699",
                    "native_action": "",
                    "condition": "",
                    "cid": 150696699,
                    "option": "A 不养",
                    "is_default": 1
                }, {
                    "id": 5174866,
                    "platform_action": "JUMP 5174866 150696996",
                    "native_action": "",
                    "condition": "",
                    "cid": 150696996,
                    "option": "B 养"
                }]
            }],
            "skin": {
                "choice_image": "http://i0.hdslb.com/bfs/app/62fb3ea57a93a796ed2b371e583720161c8e97ba.png",
                "title_text_color": "000000ff",
                "title_shadow_color": "00000000",
                "progressbar_color": "ffffffff",
                "progressbar_shadow_color": "000000cc"
            }
        },
        "preload": {"video": [{"aid": 88288634, "cid": 150696699}, {"aid": 88288634, "cid": 150696996}]},
        "hidden_vars": [{
            "value": 0,
            "id": "v-2uF7AK8vCm",
            "id_v2": "$2uF7AK8vCm",
            "type": 1,
            "is_show": 0,
            "name": "数值4",
            "skip_overwrite": 0
        }, {
            "value": 66,
            "id": "v-3Osw05ydAd",
            "id_v2": "$3Osw05ydAd",
            "type": 2,
            "is_show": 0,
            "name": "随机值",
            "skip_overwrite": 0
        }, {
            "value": 0,
            "id": "v-PrLS3mmX@d",
            "id_v2": "$PrLS3mmX_64_d",
            "type": 1,
            "is_show": 0,
            "name": "数值3",
            "skip_overwrite": 0
        }, {
            "value": 0,
            "id": "v-ZMDaNHKSjg",
            "id_v2": "$ZMDaNHKSjg",
            "type": 1,
            "is_show": 0,
            "name": "数值2",
            "skip_overwrite": 0
        }, {
            "value": 0,
            "id": "v-f9xiVU8HAk",
            "id_v2": "$f9xiVU8HAk",
            "type": 1,
            "is_show": 0,
            "name": "数值1",
            "skip_overwrite": 0
        }],
        "is_leaf": 0
    }
}
