import React from "react";
import PostSummaryList from "../post-summary-list";
import {Link} from "react-router-dom";
import '../styles/index.css';
const ExploreComponent = () => {
 return(
   <>
     <div className="row">
        <div className="col-11">
        <div className="position-relative">
        <div className="input-group rounded">
        <input className="ps-4 form-control rounded-pill" placeholder="Search Tuiter"/>
        </div>
        <span className="position-absolute bottom-0 left-50 top-0 pt-2"><i className="fas fa-search"></i></span>
        </div>
        </div>
        <div className="col-1 mt-1">
            <i className="fas fa-cog fa-2x text-primary"></i>
        </div>
    </div>
        <ul className="nav nav-tabs mt-2 mb-2">
        <li className="nav-item">
            <Link to="#" className="nav-link active">For You</Link>
        </li>
        <li className="nav-item">
            <Link to="#" className="nav-link">Trending</Link>
        </li>
        <li className="nav-item">
            <Link to="#" className="nav-link">News</Link>
        </li>
        <li className="nav-item">
            <Link to="#" className="nav-link">Sports</Link>
        </li>
        <li className="nav-item">
        <Link to="#" className="nav-link">Entertainment</Link>
        </li>
        </ul>

        <div className="position-relative">
        <img src={`/images/star_ship.jpg`} width="100%" alt=""/>
        <h1 className="position-absolute bottom-0 left- text-white">SpaceX's Starship</h1>
    </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;