import React from 'react';
import Store from "../../redux/store";
import {connect} from "react-redux";
import ReactCookies from 'react-cookies';
import RoundSowing from '../../components/roundSowing/RoundSowing';

const currentData = Store.getState();
const mapStateToProps=(state)=>{
    console.log(state);
    return {
    shouldLogin:state.shouldLogin,
}};

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <RoundSowing/>
                绝地求生
                {console.log(this.props)}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MainPage);
