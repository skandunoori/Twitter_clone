import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
 return (
    <>
    <div className="list-group">
    <div className="list-group-item">
        <i className="fab fa-twitter"></i>
    </div>
    <div className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
        <Link to = "/tuiter/home" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-home"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Home
              </div>
        </div>
        </Link>
    </div>
    <div className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
        <Link to="/tuiter/explore" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-hashtag"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Explore
              </div>
        </div>
        </Link>
    </div>
    <div className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
        <a href="home.html" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-bell"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Notifications
              </div>
        </div>
        </a>
    </div>
    <div className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
        <a href="home.html" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Messages
              </div>
        </div>
        </a>
    </div>
    <div className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}>
        <a href="home.html" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-bookmark"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Bookmarks
              </div>
        </div>
        </a>
    </div>
    <div className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
        <a href="home.html" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-list"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Lists
              </div>
        </div>
        </a>
    </div>
    <div className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
    <Link to="/tuiter/profile" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-user"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
                Profile
              </div>
        </div>
        </Link>
    </div>
    <div className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
        <a href="home.html" style={{"textDecoration":"none", "color":"black"}}>
        <div className="row">
              <div className="col-2">
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <div className="col-10 d-none d-xl-block">
              More
              </div>
        </div>
        </a>
    </div>
  </div>
    <button className="btn btn-primary w-100 mt-2 rounded-pill ">Tuit</button>
</>
 );
};

export default NavigationSidebar;