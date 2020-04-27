import React from 'react';
import * as BigDataAPI from '../../api/bigData';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import {Link} from "react-router-dom";

const divId=[
    {'key':'video','val':'视频','num':0},
    {'key':'bangumi','val':'番剧','num':1},
    {'key':'search','val':'搜索','num':2}
]
class bigData extends React.Component{
    state={
        data:{}
    }

    drawGrid(divId:any,arr:any){
        const myChart=echarts.init(document.getElementById(divId.key));
        myChart.setOption({
            title:{text:`我最经常${divId.val==='搜索'?'':'看'}的${divId.val}`},
            color:['#F45A8D'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:[
                {
                    type: 'category',
                    data: arr.map(item=>item.name),
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis:[
                {
                   type:'value',
                }
            ],
            series:[{
                name:'次数',
                type:'bar',
                barWidth:'60%',
                data:arr.map(item=>item.num),
            }]
        })
    }

    async componentDidMount(){
        const data=await BigDataAPI.getBigData();
        this.setState({
            data:data.data,
        },()=>{
            divId.map((item,index)=>{
                this.drawGrid(item,this.state.data[index])
            })
        })
    }

    render(){
        return(
            <div style={{flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around'
            }}>
                <div id="video" style={{ width: '45%', height: 400 }}/>
                <div id="bangumi" style={{ width: '45%', height: 400 }}/>
                <div id="search" style={{ width: '45%', height: 400 }}/>
            </div>
        )
    }
}

export default bigData;
