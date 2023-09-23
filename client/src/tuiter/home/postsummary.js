import parse from 'html-react-parser';
import React from "react";
const PostSummary = ({posts}) => {
 return(
    <div className="list-group-item">
    <div className="row">
        <div className="col-1">
            <img src={`/images/${posts.image}`} className="wd-rounded-images" width="40px" height="50px" alt=""/>
        </div>
        <div className="col-11">
            <span>{posts.username}</span>
            <i className="fas fa-check-circle"></i>
            <span className="text-secondary">{posts.handle}&nbsp;.&nbsp;{posts.timeframe}</span><br/>
            <span>{parse(`${posts.content}` )}</span>
        </div>
    </div>
    <div className="row mt-3">
        <div className={`card mx-auto wd-card-bg p-0 ${posts.cardTitle?'wd-card-border':''}`} id="c1" style={{"width": "35rem"}}>
            <img src={`/images/${posts.cardImage}`} className="card-img-top m-0 p-1" alt="..." style={{"borderRadius": "0px"}}/>
            {posts.cardTitle?
            <div className={`card-body p-3 ${posts.cardTitle?'wd-card-title-border':''}`} id="c2">
                <h5 className="card-title text-white ">{posts.cardTitle}</h5>
                <p className="card-text text-secondary">{parse(`${posts.cardBody}`)}</p>
            </div>:''}
        </div>
    </div>
    <div className="row mt-2">
    <div className="col-3">
        <i className='far fa-comment text-secondary'>&nbsp;{posts.commentNumber}</i>
    </div>
    <div className="col-3">
        <i className='fa fa-share-alt text-secondary'>&nbsp;{posts.shareNumber}</i>
    </div>
    <div className="col-3">
        <i className='fa fa-heart text-secondary'>&nbsp;{posts.heartNumber}</i>
    </div>
    <div className="col-3">
        <i className='fa fa-download text-secondary'></i>
    </div>
    </div>
</div>
 );
};

export default PostSummary;
