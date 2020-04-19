import React from 'react';
import {Tabs} from 'antd';
import {TabsProps} from 'antd/es/tabs';

interface DrawerProps {
    currentIndex: string;
    drawerItem: Array<{}>,
    onChange: TabsProps['onChange']
}

class Drawer extends React.Component<DrawerProps> {

    getTab(data: any) {
        const {TabPane} = Tabs;
        return (<Tabs onChange={this.props.onChange} activeKey={this.props.currentIndex}>
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
