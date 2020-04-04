import { connect } from "react-redux";
import Login from "../views/Login/login";
const mapStateToProps=(state)=>({
    shouldLogin:state.shouldLogin,
});
export default connect(mapStateToProps)(Login);
