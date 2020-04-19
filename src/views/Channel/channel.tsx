import React from 'react'
import Drawer from '../../components/drawer/Drawer';
import {withRouter, RouteComponentProps} from 'react-router';
import MainPage from '../MainPage/MainPage';
import OtherChannel from './OtherChannel';
import Bangumi from './Bangumi';

interface ChannelProps extends RouteComponentProps<{ rid: string }> {
    drawerItem: any
}

class Channel extends React.Component<ChannelProps, {currentIndex: string }> {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: this.props.match.params.rid || '0',
        };
    }


    judgePage(data:any){
        if(data==='0'){
            return <MainPage/>;
        }else if(data==='-1'){
            return <>WTF?</>
        }else if(data==='13'){
            return <Bangumi/>
        }else{
            return <OtherChannel currentIndex={data}/>
        }
    }

    render() {
        return (
            <>
                <Drawer
                    currentIndex={this.state.currentIndex}
                    drawerItem={this.props.drawerItem}
                    onChange={(key) => {
                        this.props.history.push(`/channel/${key}`)
                        this.setState({currentIndex: key})
                    }}
                />
                {
                    this.judgePage(this.state.currentIndex)
                    // this.state.currentIndex === '0' ? <MainPage/> : (this.state.currentIndex === '-1'?<>WTF?</>:<OtherChannel currentIndex={this.state.currentIndex}/>)
                }
            </>
        )
    }
}

export default withRouter(Channel);
