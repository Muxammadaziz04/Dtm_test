import { combineReducers, createStore } from "redux";

import subjectsReducer from "../reducers/subjectsReducer";

const rootReducer = combineReducers({
    subjectsReducer
})

export const store = createStore(rootReducer)