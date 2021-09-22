import { combineReducers } from "redux";
import { reducerMarket } from "./reducerMarket";
import reducerItems from "./reducerItems";

export default combineReducers({
    reducerMarket,
    reducerItems,
})