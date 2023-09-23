import React, {useEffect} from "react";
import TuitSummary from "../tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../../services/tuits-thunks.js";

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return (
        <div className="list-group wd-post-list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(p => {
                    return (
                    <TuitSummary key={p._id} tuits={p}/>);
                })
            }
        </div>
    );
}

export default TuitList;

