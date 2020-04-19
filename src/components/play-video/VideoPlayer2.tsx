import React from 'react';
import flvjs from 'flv.js';
import ReactPlayer from 'react-player';
import Context from "./transfer";

// const urls = [
//     'https://www.bilibili.com/xxx/av1.mp4',
//     'https://www.bilibili.com/xxx/av2.mp4',
//     'https://www.bilibili.com/xxx/av3.mp4',
// ];

// urls[playingIndex],

interface props {
    url: string[],
    style?: React.CSSProperties
}

interface IState {
    playerType: 'flv' | 'other';
    playingIndex: number;
    playingUrl: string;
}

class VideoPlayer2 extends React.Component<props, IState>{
    constructor(props: props) {
        super(props)
        this.state = {
            playerType: 'other',
            playingUrl: props.url[0],
            playingIndex: 0,
        }
    }

    flvPaylerRef = React.createRef<HTMLVideoElement>();

    componentDidUpdate(prevProps: props, prevState: IState) {
        if (this.state.playingUrl && prevState.playingUrl !== this.state.playingUrl) {
            const { pathname } = new URL(this.state.playingUrl);
            const isFlv = pathname.endsWith('.flv');
            this.setState({
                playerType: isFlv ? 'flv' : 'other',
            })
        }

        if (prevState.playerType !== this.state.playerType && this.state.playerType === 'flv') {
            this.initFlvPlayer(this.props.url[0]);
        }

        if (prevProps.url !== this.props.url) {
            this.setState({
                playingUrl: this.props.url[0],
                playingIndex: 0,
            });
        }

        if (prevState.playingUrl !== this.state.playingUrl && this.state.playerType === 'flv') {
            this.initFlvPlayer(this.state.playingUrl)
        }
    }

    initFlvPlayer(playUrl: string) {
        const flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: this.url(playUrl)
        });
        flvPlayer.attachMediaElement(this.flvPaylerRef.current!);
        flvPlayer.load();
        flvPlayer.play();
    }

    url(url){
        const {videoURL} = this.context;
        const url0=encodeURIComponent(url?.replace(/^http:\/\//,'https://'));
        return `${videoURL}?video=${url0}`;
    }

    handleEnded = () => {
        const { playingIndex } = this.state;
        const maybeNextUrl = this.props.url[playingIndex + 1];
        if (maybeNextUrl) {
            this.setState(({playingIndex }) => ({
                playingIndex: playingIndex + 1,
                playingUrl: maybeNextUrl,
            }))
        }
    }
    render(){
        const {style } = this.props
        return(
            <div>
                {this.state.playerType === 'other'
                    ? <video onEnded={this.handleEnded} style={style} controls src={this.url(this.state.playingUrl)} />
                    : <video onEnded={this.handleEnded} style={style} controls ref={this.flvPaylerRef} />}
            </div>
        )
    }
}

VideoPlayer2.contextType = Context;
export default VideoPlayer2;
