import React from "react";
import {useDispatch} from "react-redux";
// import { deleteTuit } from "../tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks.js";
import TuitStats from "../tuit-stats";
const TuitSummary = ({tuits}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));  
} 
 return(
    <div className="list-group-item">
    <div className="row">
        <div className="col-1">
            <img src={`/images/${tuits.image}`} className="wd-rounded-images" width="40px" height="50px" alt=""/>
        </div>
        <div className="col-10">
            <span>{tuits.username}</span>&nbsp;
            <i className="fas fa-check-circle" style={{color:"blue"}}></i>&nbsp;
            <span className="text-secondary">{tuits.handle}&nbsp;.&nbsp;{tuits.time}</span><br/>
            <span>{tuits.tuit}</span>
        </div>
        <div className="col-1">
         <i className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuits._id)}></i>
        </div>
        <div>
        <TuitStats tuit={tuits}/>
        </div>
    </div>
</div>
 );
};

export default TuitSummary;
