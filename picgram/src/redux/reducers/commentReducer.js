import { ActionTypes } from "../constants/action-types";

const initialState = {
    comments : [
        {
            imageid : 117,
            comment : ["wonderful","wonderful awesome"]
        }, 
        {
            imageid : 118,
            comment : ["wonderful","asss awesome"]
        } 
    ]
}
export const commentReducer = (state = initialState,{type,payload}) =>{
    switch (type){
        case ActionTypes.ADD_COMMENT:
            return state;
        default:
            return state;
    }
};