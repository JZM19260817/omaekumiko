import React from 'react';
import * as MainAPI from '../../api/main';
import {Carousel} from 'antd';

interface roundSowingProps {
}

interface roundSowingState {
    roundSowingIndex: Array<{}>,
};

class RoundSowing extends React.Component<roundSowingProps, roundSowingState> {
    constructor(props) {
        super(props);
        this.state = {
            roundSowingIndex: [],
        }
    }

    async getRoundSowing() {
        const res = await MainAPI.fetchRoundSowing();
        console.log('roundSowing:', res);
        this.setState({
            roundSowingIndex: res.data,
        })
    }

    getTab(data: any) {
        return (
            <Carousel autoplay>
                {data.map((item, index) => (
                    <div  key={index} style={{height:'250px'}}>
                        <img style={{margin:'0 auto'}} src={item.pic}onClick={() => {
                            window.open(`${item.url}`)
                        }}/>
                    </div>
                ))}
            </Carousel>
        )
    }

    async componentDidMount() {
        await this.getRoundSowing();
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                {this.getTab(this.state.roundSowingIndex)}
            </div>
        )
    }
}

export default RoundSowing;
