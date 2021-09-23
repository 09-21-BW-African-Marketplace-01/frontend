import { combineReducers } from "redux";
import { reducerMarket } from "./reducerMarket";
import { reducerUser } from './reducerUser';
import reducerItems from "./reducerItems";

export default combineReducers({
    reducerMarket,
    reducerItems,
    reducerUser
})