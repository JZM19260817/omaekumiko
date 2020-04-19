import React from 'react';
import './header.css';
import TanakaAsuka from '../../dreamsolister/tanakaasuka.png';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {SearchOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { defaultLogin } from '../../redux/actions/login';
import { connect } from 'react-redux';

type userProps = {
    session: typeof defaultLogin;
}
class Header extends React.Component<userProps> {
    render() {
        const {session} = this.props;
        return (
            <div className="header">
                <Link to={'/'}>
                    <img
                        className="TanakaAsuka"
                        src={TanakaAsuka}
                    />
                </Link>
                {
                    session.isLogin ? (
                        <Link className="Avatar" to={`/up/${session.userUID}`}>
                            <Avatar
                                size={60}
                                icon={<img src={session.userAvater}/>}
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

export default connect(({ shouldLogin }) => ({session: shouldLogin}))(Header);
