import React from 'react';
import * as SearchAPI from '../../api/search'
import {Input} from 'antd';
import {Card} from 'antd';

interface searchProps {
}

interface searchState {
    text: String,
    hotWd: Array<any>,
}

class search extends React.Component<searchProps, searchState> {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            hotWd: [],
        }
    }

    async getHotwd() {
        const res = await SearchAPI.fetchHotwd();
        console.log(res);
        this.setState({
            hotWd: res.data.list,
        })
    }

    renderHotWd(data: any) {
        const gridStyle = {
            width: '25%',
            // textAlign: 'center',
        };
        return (
            <Card title="热搜">
                {data.map((item) => (
                    <Card.Grid style={gridStyle}>
                        {item.keyword}
                    </Card.Grid>
                ))}
            </Card>
        )
    }

    async componentDidMount() {
        await this.getHotwd();
    }

    render() {
        const {Search} = Input;
        return (
            <div>
                <div style={{width: '60%', margin: '0 auto'}}>
                    <Search
                        size={'large'}
                        placeholder="搜索"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                </div>
                <div style={{width: '60%', margin: '0 auto'}}>
                    {this.renderHotWd(this.state.hotWd)}
                </div>
            </div>
        )
    }
}

export default search;
