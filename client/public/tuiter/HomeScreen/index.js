import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "./PostList.js";

function exploreComponent() {
    $('#wd-home').append(`
        <div class="row mt-2">
            <div class="col-2">
                ${NavigationSidebar('home')}
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 d-none d-sm-block">
                ${PostList()}
            </div>
            <div class="col-4 d-none d-lg-block">
                ${PostSummaryList()}
            </div>
        </div>
    `);
 }
 
 $(exploreComponent);