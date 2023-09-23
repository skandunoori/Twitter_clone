import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
    <div class="row">
        <div class="col-11">
        <div class="position-relative">
        <div class="input-group rounded">
        <input class="ps-4 form-control rounded-pill" placeholder="Search Tuiter"/>
        </div>
        <span class="position-absolute bottom-0 left-50 top-0 pt-2"><i class="fas fa-search"></i></span>
        </div>
        </div>
        <div class="col-1 mt-1">
            <i class="fas fa-cog fa-2x text-primary"></i>
        </div>
    </div>
        <ul class="nav nav-tabs mt-2 mb-2">
        <li class="nav-item">
            <a class="nav-link active" href="#">For You</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Entertainment</a>
        </li>
        </ul>

        <div class="position-relative">
        <img src="starship.jpg" width="100%"/>
        <h1 class="position-absolute bottom-0 left- text-white">SpaceX's Starship</h1>
        </div>
        ${PostSummaryList()}
    `)
}

export default ExploreComponent;