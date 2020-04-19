import React from 'react';
import {Card} from 'antd';
import * as MainAPI from '../../api/main';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom';

import Store from "../../redux/store";

// const currentData = Store.getState();

interface bangumiProps {
    shouldLogin: any,
}

interface bangumiState {
    latestBangumi: Array<{}>,
}

class Bangumi extends React.Component<bangumiProps, bangumiState> {
    constructor(props) {
        super(props);
        this.state = {
            latestBangumi: [],
        }
    }

    async latestBangumi() {
        const res = await MainAPI.fetchLatestBangumi();
        this.setState({
            latestBangumi: res.data.result,
        }, () => console.log(this.state))
    }

    renderBangumi(data: any) {
        const {Meta} = Card;
        return data.map((item) => (
            <Link to={`/bangumi/ep${item.ep_id}`}>
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img src={item.cover}/>}
                >
                    <Meta title={item.title}/>
                </Card>
            </Link>
        ))
    }

    async componentDidMount() {
        await this.latestBangumi();
    }

    render() {
        return (
            <div style={{
                display: 'flex',
                width: 1260,
                flexWrap: 'wrap',
                margin: '0 auto',
                justifyContent: 'space-around'
            }}>
                {
                    this.props.shouldLogin.isLogin ? (
                        <>
                            {this.renderBangumi(this.state.latestBangumi)}
                        </>
                    ) : (
                        <>请登录并充值哔哩哔哩大会员~</>
                    )
                }
            </div>
        )
    }
}

export default connect(({shouldLogin}) => ({
    shouldLogin
}), null)(Bangumi);
