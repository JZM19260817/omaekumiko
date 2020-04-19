import React from 'react';
import Store from "../../redux/store";
import {connect} from "react-redux";
import ReactCookies from 'react-cookies';
import RoundSowing from '../../components/roundSowing/RoundSowing';
import VideoCard from '../../components/video-item/video-item';
import {Divider} from 'antd';

import * as MainAPI from '../../api/main';
import * as RangkingAPI from '../../api/ranking';
import {Link} from "react-router-dom";

const currentData = Store.getState();
const mapStateToProps = (state) => {
    return {
        shouldLogin: state.shouldLogin,
    }
};

interface mainPageProps {
}

interface mainPageState {
    indexList: Array<{}>,
}

class MainPage extends React.Component <mainPageProps, mainPageState> {
    constructor(props) {
        super(props);
        this.state = {
            indexList: [],
        }
    }

    async mainRanking() {
        const res = await RangkingAPI.fetchRankingIndex();
        this.setState({
            indexList: res.data.list,
        });
    }

    async componentDidMount() {
        await this.mainRanking();
    }

    render() {
        return (
            <div>
                <RoundSowing/>
                <Divider/>
                <div style={{
                    display: 'flex',
                    width: 1260,
                    flexWrap: 'wrap',
                    margin: '0 auto',
                    justifyContent: 'space-around'
                }}>
                    <VideoCard cardItem={this.state.indexList}/>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(MainPage);
