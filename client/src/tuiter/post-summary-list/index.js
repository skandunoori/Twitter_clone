import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PostSummaryItem
  from "./post-summary-item";
  import {findTuitsThunk} from "../../services/tuits-thunks.js";

const PostSummaryList = () => {
  // const postsArray = useSelector(state => state.tuits)
  const {tuits:postsArray, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
 return(

   <ul className="list-group">
      {
        loading &&
        <li className="list-group-item">
            Loading...
        </li>
      }
      {
       postsArray.map(post =>
         <PostSummaryItem
           key={post._id} post={post}/> )
     }
   </ul>
 );
};
export default PostSummaryList;