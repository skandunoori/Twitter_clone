import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}});


function Tuiter() {
 return (
    <Provider store={store}>
    <div className="row mt-2">
        <div className="col-2">
            <NavigationSidebar active="explore"/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 d-none d-sm-block">
        <Routes>
         <Route index   element={<HomeComponent/>}/>
         <Route path="home"    element={<HomeComponent/>}/>
         <Route path="explore" element={<ExploreComponent/>}/>
         <Route path="profile" element={<ProfileComponent/>}/>
         <Route path="edit-profile" element={<EditProfile/>}/>
       </Routes>
        </div>
        <div className="col-4 d-none d-lg-block">
            <WhoToFollowList/>
        </div>
    </div>
    </Provider>
 )
}

export default Tuiter