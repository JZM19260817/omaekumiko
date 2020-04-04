import React from 'react';
import {Tabs} from 'antd';
import * as MainAPI from '../../api/main';

interface DrawerProps {
}

interface DrawerState {
    currentIndex: number;
    drawerItem: Array<{}>,
}

class Drawer extends React.Component<DrawerProps, DrawerState> {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            drawerItem: [],
        }
    }

    async partition() {
        const res = await MainAPI.fetchPartition();
        const arr = [...res.data.partitionList[0]];
        this.setState({
            drawerItem: arr
        })
    }

    async componentDidMount() {
        await this.partition();
    }

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
                {this.getTab(this.state.drawerItem)}
            </div>
        )
    }
}

export default Drawer;
