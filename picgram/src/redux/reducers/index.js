import { combineReducers } from "redux";

import {imageReducer} from "./imageReducer";
import {commentReducer} from "./commentReducer";
import { likeReducer } from "./likeReducer";

const reducers = combineReducers({
    allImages : imageReducer,
    allComments : commentReducer,
    allLikes : likeReducer,
})

export default reducers;