import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar('explore')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 d-none d-sm-block">
                ${ExploreComponent()}
            </div>
            <div class="col-4 d-none d-lg-block">
                ${WhoToFollowList()}
            </div>
        </div>
    `);
 }
 
 $(exploreComponent);