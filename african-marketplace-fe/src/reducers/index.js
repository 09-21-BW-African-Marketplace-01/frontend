import { combineReducers } from "redux";
import { reducerMarket } from "./reducerMarket";
import { reducerUserMarket } from './reducerUserMarket';
import reducerItems from "./reducerItems";

export default combineReducers({
    reducerMarket,
    reducerItems,
    userMarket: reducerUserMarket
})