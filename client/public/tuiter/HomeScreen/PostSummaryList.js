const PostItem = (posts) => {
    return (`
    <div class="list-group-item">
    <div class="row">
        <div class="col-1">
            <img src="${posts.image}" class="wd-rounded-images" width="40px" height="50px">
        </div>
        <div class="col-11">
            <span>${posts.username}</span>
            <i class="fas fa-check-circle"></i>
            <span class="text-secondary">${posts.handle}&nbsp;.&nbsp;${posts.timeframe}</span><br>
            <span>${posts.content}</span>
        </div>
    </div>
    <div class="row mt-3">
        <div class="card mx-auto wd-card-bg p-0 ${posts.cardTitle?'wd-card-border':''}" id="c1" style="width: 35rem;">
            <img src="${posts.cardImage}" class="card-img-top m-0 p-1" alt="..." style="border-radius: 0px">
            ${posts.cardTitle?`
            <div class="card-body p-3 ${posts.cardTitle?'wd-card-title-border':''}" id="c2">
                <h5 class="card-title text-white ">${posts.cardTitle}</h5>
                <p class="card-text text-secondary">${posts.cardBody}</p>
            </div>`:''}
        </div>
    </div>
    <div class="row mt-2">
    <div class="col-3">
        <i class='far fa-comment text-secondary'>&nbsp;${posts.commentNumber}</i>
    </div>
    <div class="col-3">
        <i class='fa fa-share-alt text-secondary'>&nbsp;${posts.shareNumber}</i>
    </div>
    <div class="col-3">
        <i class='fa fa-heart text-secondary'>&nbsp;${posts.heartNumber}</i>
    </div>
    <div class="col-3">
        <i class='fa fa-download text-secondary'></i>
    </div>
    </div>
</div>
    `);
}

export default PostItem;