import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {Link,NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const EditProfile = () => {
    const profile = useSelector(
        state => state.profile);
    let [initProfile, setProfile]
        = useState(profile);
    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch({type: 'modify-profile',
            profile:initProfile
        });
    }
    return (
    <>
            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <Link to="/tuiter/profile"><IconButton children={<CloseIcon/>} style={{"color": "black"}}/></Link>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9">
                    <span className="wd-font-color mt-2" style={{"fontSize":"1.5rem"}}>Edit profile</span>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                    <div className="btn wd-rounded-buttons" style={{"background":"white"}} onClick={()=>{saveClickHandler();console.log('test');<NavLink to="/tuiter/profile"></NavLink>;}}><Link to="/tuiter/profile">Save</Link></div>
                </div>
            </div>
            <div className="row mt-1">
                <img src="/images/banner.jpg" className="img-fluid" width="100%" height="200px" alt=" " />
            </div>
            <img src="/images/anushka.png" className="wd-rounded-images position-relative" height="100px" width="100px" style={{"bottom":"1rem"}} alt=" "/>
            <form>
                <div className="form-group">
                    <label for="name" className="wd-gray-color">First Name</label>
                    <input type="text" id="name" onChange={(event)=>{setProfile({...initProfile, firstName : event.target.value})}}
                           style={{"background":"white","color":"black","width":"100%","border":"1px solid gray"}}
                           value={`${initProfile.firstName}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Last Name</label>
                    <input type="text" id="name" onChange={(event) => {
                        setProfile({...initProfile, lastName: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={`${initProfile.lastName}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Bio</label>
                    <input type="text" id="name" onChange={(event) => {
                        setProfile({...initProfile, bio: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={`${initProfile.bio}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Location</label>
                    <input type="text" id="name" onChange={(event) => {
                        setProfile({...initProfile, location: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={`${initProfile.location}`} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="name" className="wd-gray-color">Date of Birth</label>
                    <input type="date" id="name" onChange={(event) => {
                        setProfile({...initProfile, dateOfBirth: event.target.value})
                    }}
                           style={{
                               "background": "white",
                               "color": "black",
                               "width": "100%",
                               "border": "1px solid gray"
                           }}
                           value={new Date(initProfile.dateOfBirth).toISOString().split("T")[0]} className="form-control"/>
                </div>

            </form>
        </>
    );
}
export default EditProfile;