import React from 'react';
import {Card} from 'antd';
import {PlayCircleFilled, ClockCircleFilled, UserOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

interface cardProps {
    cardItem: {}
}

class VideoItem extends React.Component<cardProps> {
    renderCard(data: any) {
        const {Meta} = Card;
        return data.map((item) => (
            <Link key={item.aid} to={`/video/av${item.aid}/1`}>
                <Card
                    hoverable
                    style={{width: 300}}
                    cover={<img src={item.pic}/>}
                >
                    <Meta
                        title={item.title}
                        description={
                            <Link to={`/up/${item.mid}`}>
                                <UserOutlined/>{item.author}
                            </Link>
                        }
                    />
                    <>
                        <>
                            <PlayCircleFilled/>{(item.play >= 10000) ? (`${(item.play / 10000).toFixed(1)}万`) : item.play}</>
                        <><ClockCircleFilled/>{item.duration}</>
                    </>
                </Card>
            </Link>
        ))
    }

    render() {
        return (
            <>
                {this.renderCard(this.props.cardItem)}
            </>
        )
    }
};

export default VideoItem;
