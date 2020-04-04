import React from 'react';
import {Tabs} from 'antd';
import { Switch, Route } from 'react-router-dom';

interface DrawerProps {
    currentIndex: number;
    drawerItem: Array<{}>,
}

class Drawer extends React.Component<DrawerProps> {

    getTab(data: any) {
        const {TabPane} = Tabs;
        return (<Tabs>
            {data.map((item) => (
                <TabPane tab={item.typename} key={item.tid}>
                </TabPane>
            ))}
        </Tabs>)
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                {this.getTab(this.props.drawerItem)}
            </div>
        )
    }
}

export default Drawer;
