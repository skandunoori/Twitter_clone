import React from "react";
import {useDispatch} from "react-redux"; 
import { updateTuitThunk } from "../../../services/tuits-thunks.js";
const TuitStats = (
    {tuit}
) => {
    const dispatch = useDispatch()
    return (
    <div className="row mt-2">
    <div className="col-3" style = {{color: "black"}}>
        <i className='far fa-comment'></i>
        <span>{tuit.replies}</span>
    </div>
    <div className="col-3">
        <i className='fa fa-share-alt'></i>
        &nbsp;{tuit.retuits}
    </div>
    <div className="col-3">
      <><i onClick={() => {dispatch(updateTuitThunk({
       ...tuit,
       likes: tuit.likes + 1,
       liked: true
     }))
     }} className="fa fa-heart" style = {tuit.liked ? {color:"red"}:{}}></i></>
          &nbsp;{tuit.likes}
    </div>
    <div className="col-3">
    <><i onClick={() => {dispatch(updateTuitThunk({
       ...tuit,
       dislikes: tuit.dislikes + 1,
       disliked: true
     }))
     }} className="fa fa-thumbs-down" style = {tuit.disliked ? {color:"red"}:{}}></i></>
          &nbsp;{tuit.dislikes}
    </div>
    </div>
    );
};

export default TuitStats;