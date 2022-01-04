import { ActionTypes } from "../constants/action-types"

export const setImages = (images) =>{
    return{
        type : ActionTypes.SET_IMAGES,
        payload : images,
    };
};

export const selectedImage = (image) => {
   return{
       type : ActionTypes.SELECTED_IMAGE,
       payload : image,
   };
};

export const addComment = (comments) => {
    return {
        type : ActionTypes.ADD_COMMENT,
        payload : comments,
    };
};

export const addLike = (likes) => {
    return {
        type : ActionTypes.ADD_LIKE,
        payload : likes,
    };
};