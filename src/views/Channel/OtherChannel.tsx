import React from 'react';
import {connect} from "react-redux";
import VideoCard from '../../components/video-item/video-item';

import * as RankingAPI from '../../api/ranking';
import Store from "../../redux/store";

const currentData = Store.getState();
const mapStateToProps = (state) => {
    return {
        shouldLogin: state.shouldLogin,
    }
};

interface otherChannelProps {
    currentIndex: string,
}

interface otherChannelState {
    videoList: Array<{}>
}

class OtherChannel extends React.Component<otherChannelProps, otherChannelState> {
    constructor(props) {
        super(props);
        this.state = {
            videoList: [],
        }
    }

    async partitionRanking() {
        const res = await RankingAPI.fetchRanking(this.props.currentIndex, 3);
        console.log('r:', res)
        this.setState({
            videoList: res.data,
        });
    }

    componentDidMount() {
        this.partitionRanking();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex) {
            this.partitionRanking();
        }
    }

    render() {
        return (
            <div>
                {(this.props.currentIndex !== '13') ? (
                    <div style={{
                        display: 'flex',
                        width: 1260,
                        flexWrap: 'wrap',
                        margin: '0 auto',
                        justifyContent: 'space-around'
                    }}>
                        <VideoCard cardItem={this.state.videoList}/>
                    </div>
                ) : (
                    <div>bangumi</div>
                )}
            </div>
        );
    }
}

export default OtherChannel;
