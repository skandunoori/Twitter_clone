const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
            <div class="row">
              <div class="col-9">
                <span class="text-secondary">${post.topic}</span><br>
                <span class="fw-bolder">${post.userName}&nbsp;</span>
                <i class="fas fa-check-circle"></i>
                <span class="text-secondary"> - ${post.time}</span><br>
                <span class="fw-bolder">${post.title}</span><br>
              </div>
              <div class="col-3 card my-auto">
                <img src="${post.image}" class="card-img-top my-auto"/>
              </div>
            </div>
    </li>
    `);
}

export default PostSummaryItem;