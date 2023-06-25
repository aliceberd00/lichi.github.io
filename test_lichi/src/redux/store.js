import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {itemReducer} from "./itemReducer"
import {loadingReducer} from "@/redux/loadingReducer";

const rootReducer = combineReducers({
    items_reducer: itemReducer,
    // loading_reducer: loadingReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
