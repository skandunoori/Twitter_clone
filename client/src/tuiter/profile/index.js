import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import IconButton from '@mui/material/IconButton';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = (
    
) => {
    const profile = useSelector((state) => state.profile);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return (
        <>
            <div className="row">
                <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-1">
                    <IconButton children={<ArrowBackIcon/>} style={{"color":"black"}}/>
                </div>
                <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-11 col-sm-11">
                <span style={{"color":"black","fontSize":"1.5em"}}>{profile.firstName}&nbsp;{profile.lastName}</span><br />
                    <span className="wd-gray-color">320 Tweets</span>
                </div>
            </div>
            <div className="row">
                <img src={`/images/${profile.bannerPicture}`} className="img-fluid" width="100%" height="200px" alt=" "/>
            </div>
            <div className="row">
                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10" >
                    <img src={`/images/${profile.profilePicture}`} className="rounded-circle position-relative" height="100px" width="100px" style={{"bottom":"1rem"}} alt=" "/>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 mt-1">
                    <Link to="/tuiter/edit-profile"><div className="btn wd-rounded-buttons float-right" style={{"background":"black","color":"white","border":"1px solid white"}}>Edit</div></Link>
                </div>
            </div>
            <div>
                <span style={{"color":"black","fontSize":"1.5em"}}>{profile.firstName}&nbsp;{profile.lastName}</span><br />
                <span className="wd-gray-color">{profile.handle}</span><br />
                <span className="wd-font-color">{profile.bio}</span><br />
                <span className="wd-gray-color"><LocationOnIcon/>{profile.location}&nbsp;</span>
                <span className="wd-gray-color"><LocationSearchingIcon/>{" Born " +
                    new Date(profile.dateOfBirth + " 4:00:00").toLocaleDateString(
                        undefined,
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}&nbsp;</span>
                <span className="wd-gray-color"><CalendarMonthIcon/> {" Joined " +
                    months[parseInt(profile.dateJoined.split("/")[0]) - 1] +
                    ", " +
                    profile.dateJoined.split("/")[1]}&nbsp;</span><br />
                <span className="wd-gray-color">{profile.followingCount}&nbsp; Following</span>&nbsp;&nbsp;
                <span className="wd-gray-color">{profile.followersCount}&nbsp; Followers</span>
            </div>
        </>
    );
}
export default ProfileComponent;