import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {itemReducer} from "./itemReducer"

const rootReducer = combineReducers({
    items_reducer: itemReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
