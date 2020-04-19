import {createStore} from "redux";
import reducer from "./reducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
    }
}

const store=createStore(reducer, (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.()));
export default store;
