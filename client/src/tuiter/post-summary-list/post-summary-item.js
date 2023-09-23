import React from "react";
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.png"
   }
 }
) => {
 return(
    <div>
        <li className="list-group-item">
            <div className="row">
              <div className="col-9">
                <span className="text-secondary">{post.topic}</span><br/>
                <span className="fw-bolder">{post.username}&nbsp;</span>
                <i className="fas fa-check-circle"></i>
                <span className="text-secondary"> - {post.time}</span><br/>
                <span className="fw-bolder">{post.title}</span><br/>
              </div>
              <div className="col-3 card my-auto">
                <img src={`/images/${post.image}`} className="card-img-top my-auto" alt=""/>
              </div>
            </div>
        </li>
    </div>
 );
};
export default PostSummaryItem;

