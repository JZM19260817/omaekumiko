import React from 'react';
import QRCode from "qrcode.react";
import * as LoginAPI from "../../api/login";
import * as Login from '../../redux/actions/login';
import Store from "../../redux/store";
import Header from "../../components/Header/Header";
import './login.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import ReactCookies from 'react-cookies';
import Eupho from "../../dreamsolister/Eupho2.png";
import {Link} from 'react-router-dom'
import {setShouldLogin} from "../../redux/actions";

const mapStateToProps=(state)=>({
    shouldLogin:state.shouldLogin,
});
const eupho={
    backgroundImage:`url(${Eupho})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center center",
};
type loginPageProps={
    history:any,
    shouldLogin:any
}
type loginPageState={
    oauthKey?:String,
    oauthKeyURL?:String,
    login:boolean,
    timer:any
}

class login extends React.Component<loginPageProps,loginPageState> {
    constructor(props){
        super(props);
        this.state={
            timer:null,
            oauthKey:'',
            oauthKeyURL:'',
            login:false,
        };
    };

    async getOauthKey() {
        const res = await LoginAPI.fetchOaugthKey();
        this.setState({
            oauthKey:res.data.oauthKey,
            oauthKeyURL:res.data.url,
        });
    }

    async tryOauth(oauthKey:any){
        if(!(this.props as any).shouldLogin.isLogin){
            await Login.tryLogin(oauthKey, (this.props as any).dispatch);

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.shouldLogin.isLogin!==this.props.shouldLogin.isLogin&&nextProps.shouldLogin.isLogin){
            this.props.history.push('/index')
        }
    }

    async componentDidMount(){
        await this.getOauthKey();
        this.tryOauth(this.state.oauthKey)
    }

    componentDidUpdate() {
    }
    componentWillUnmount(): void {
        Login.clearT()
    }

    render() {
        console.log(this.props, 'login')
        const currentData = this.props.shouldLogin;
        return (
            <div style={eupho} className="page">
                <Header
                    userName={currentData.userName}
                    userAvater={currentData.userAvater}
                    userUID={currentData.userUID}
                    userCookie={currentData.userCookie}
                    isLogin={currentData.isLogin}
                />
                <div>
                    <QRCode
                        className="qrcode"
                        value={this.state.oauthKeyURL}  //value参数为生成二维码的链接
                        size={250} //二维码的宽高尺寸
                        fgColor="#000000"  //二维码的颜色
                    />
                    <a style={{'color':'#f45a8d','fontSize':'25px'}}>用bilibili扫码登录~</a>
                </div>
                <Link to={'/index'}>nav to index</Link>
            </div>
        )
    }
}

export default connect(mapStateToProps)(login);
