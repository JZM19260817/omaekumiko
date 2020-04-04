import React from 'react';
import './header.css';
import TanakaAsuka from '../../dreamsolister/tanakaasuka.png';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

type userProps = {
    userName: string,
    userAvater: string,
    userUID:string,
    userCookie: string,
    isLogin: boolean,
}
class Header extends React.Component<userProps> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <Link to={'/index'}>
                    <img
                        className="TanakaAsuka"
                        src={TanakaAsuka}
                    />
                </Link>
                {
                    this.props.isLogin ? (
                        <Link className="Avatar" to={"/up-user"}>
                            <Avatar
                                size={60}
                                icon={<img src={this.props.userAvater}/>}
                            />
                        </Link>
                    ) : (
                        <Link className="Avatar" to={"/login"}>
                            <Avatar
                                size={60}
                                icon={<UserOutlined/>}
                            />
                        </Link>
                    )
                }
                <Link className="Search" to={'/search'}>
                    <Avatar
                        size={60}
                        icon={<SearchOutlined/>}
                    />
                </Link>
            </div>
        )
    }
}

export default Header;
