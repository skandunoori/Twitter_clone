import PostItem from "./PostSummaryList.js"
import posts from "./posts.js";
const PostList = () => {
    const res=`
    <div class="list-group wd-post-list-group">
        ${posts.map(post =>{
             return PostItem(post);
    }).join('')
    }
    </div>
    `
    return res;
}

export default PostList;