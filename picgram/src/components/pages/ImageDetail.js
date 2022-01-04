import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

const ImageDetail = () =>{

    const dispatch = useDispatch();
    const {id,w,h} = useParams();
    const baseUrl ="https://picsum.photos/id/"+id+"/"+w+"/"+h;
    console.log(baseUrl);
    const comments = useSelector((state) => state.allComments.comments);
    const commentList = comments.find(cmt => cmt.imageid === Number(id));
    
    const {imageid , comment} = commentList;
    console.log(comment);
    
    
    const renderComment = comment.map((cmt) =>{
        return(
            <div className="cmt">
                <div class="card px-3">
                    <div class="card-body">{cmt}</div>
                </div> 
            </div>
            
        );
    });

    const addComment = ((value,id)=>{
        console.log(value,id);
        const sendComment = { "imageid" : id,"comment" : value};
        dispatch(addComment(sendComment));

    });

    
    

    return(
        <>
        <div className="pic1 card mt-2">
            <img src={baseUrl} alt="..." />
        </div>
        {renderComment}
        <div className ="cmt1">
            <div class="input-group mb-3">
                <input type="text" id ="comment" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <button class="btn btn-outline-secondary" 
                onClick = {e=> addComment(document.getElementById('comment').value,id)}>Comment</button>
            </div>
        </div>
        </>
        
    );
};

export default ImageDetail;
