const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
        <div class="row">
        <div class="col-2">
            <img src= "${who.avatarIcon}"/>
        </div>
        <div class="col-6">
            <div class="fw-bolder">${who.userName}&nbsp;<i class="fas fa-check-circle"></i></div>
            <div>@${who.handle}</div>
        </div>
        <div class="col-4">
            <button class="btn btn-primary w-100 mt-2 rounded-pill ">Follow</button>
        </div>
        </div>
    </li>

    `);
}

export default WhoToFollowListItem;