import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
 }
) => {
 return(
    <>
        <li className="list-group-item">
            <div className="row">
            <div className="col-2">
                <img src= {`/images/${who.avatarIcon}`} alt=""/>
            </div>
            <div className="col-6">
                <div className="fw-bolder">{who.userName}&nbsp;<i className="fas fa-check-circle" style={{color:"blue"}}></i></div>
                <div>@{who.handle}</div>
            </div>
            <div className="col-4">
                <button className="btn btn-primary w-100 mt-2 rounded-pill ">Follow</button>
            </div>
            </div>
        </li>
    </>
 );
};
export default WhoToFollowListItem;