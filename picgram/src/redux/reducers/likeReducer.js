import { ActionTypes } from "../constants/action-types";

const initialState = {
    likes : [
        {
            id :1,
            imageid : 1,
            count : 234,

        }
    ]
}
export const likeReducer = (state = initialState,{type,payload}) =>{
    switch (type){
        case ActionTypes.ADD_LIKE:
            return state;
        default:
            return state;
    }
};