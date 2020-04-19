import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router';
import {Card, Button} from 'antd';
import {PlayCircleFilled} from '@ant-design/icons';
import * as UpUserAPI from '../../api/up-users';
import Store from "../../redux/store";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {SET_LOG_OUT} from '../../redux/action-types';


interface UpUserProps extends RouteComponentProps<{ uId: any }> {
    uId: string;
    shouldLogin: any;
    logOut: () => void;
}

interface UpUserState {
    userBasicInfo: any,
    userVideo: any,
}

// const uId=this.props.match.params.uId;
class UpUser extends React.Component<UpUserProps, UpUserState> {
    constructor(props) {
        super(props);
        this.state = {
            userBasicInfo: {},
            userVideo: [],
        }
    };

    async userData() {
        const userBasic = await UpUserAPI.fetchUpUserData(this.props.match.params.uId, '');
        const allMyVideo = await UpUserAPI.fetchAllVideos(this.props.match.params.uId, 100, '');
        this.setState({
            userBasicInfo: userBasic.data.data,
            userVideo: allMyVideo.data.data.list.vlist,
        }, () => console.log(this.state))
    }

    async componentDidMount() {
        this.userData();
    }

    renderPersonalCard() {
        const {Meta} = Card;
        return (<Card
            hoverable
            style={{width: 300}}
            cover={<img src={this.state.userBasicInfo.face}/>}
        >
            <Meta title={this.state.userBasicInfo.name} description={this.state.userBasicInfo.sign}/>
        </Card>)
    }

    renderVideoCard(data: any) {
        const {Meta} = Card;
        return (data.length!==0?
            data.map((item) => {
                console.log(item.description.length)
                return <Link to={`/video/av${item.aid}/1`}>
                    <Card
                        hoverable
                        style={{width: 250}}
                        cover={<img src={item.pic}/>}
                    >
                        <Meta
                            title={item.title}
                            description={(item.description.length <= 30) ? (item.description) : (`${item.description.substring(0, 29)}...`)}
                        />
                        <><PlayCircleFilled/>{item.length}</>
                    </Card>
                </Link>
            }):<a>这个人没上传视频哦</a>
        )
    }

    render() {
        return (
            <div style={{display: 'flex', overflow: 'hidden', paddingTop: 20}}>
                <div>
                    {this.renderPersonalCard()}{
                    this.props.match.params.uId === this.props.shouldLogin.userUID ? (
                        <Button type="primary" onClick={() => {
                            this.props.logOut();
                            this.props.history.push('/');
                        }}>
                            退出
                        </Button>
                    ) : (
                        <></>
                    )
                }</div>

                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    marginLeft: 80,
                }}>{this.renderVideoCard(this.state.userVideo)}</div>
            </div>
        )
    }
}

export default connect(({shouldLogin}) => ({
    shouldLogin
}), (dispatch) => ({
    logOut: () => dispatch({type: SET_LOG_OUT}),
}))(withRouter(UpUser));
