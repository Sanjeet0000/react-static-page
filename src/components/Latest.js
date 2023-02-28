import './../styles/Latest.css';
import LatestOne from "./../images/LatestOne.jpg";

function Latest(){
    return(
        <>
            <div className="latest_container">
                <div className="sub_latest">
                    <div>    
                        <p className="latest latest_underline">The Latest</p>
                    </div>    
                    
                    <div className="latest_article">
                        <div className="card">
                            <img className="image1" src={LatestOne} alt="image1"></img>
                            <div className="card_overlay2">
                                <p className="article_title2">Tianzi Mountain</p>
                                <p className="content_latest">The Tianzi Mountains are deemed sacred by many Sulamitos who used to inhabit the outer regions of Hunan. </p>
                                <p className="article_subtitle1"><small className='travel_text'>Travel</small><small> / </small><small>Posted on 16/12/2022</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="image1" src={LatestOne} alt="image1"></img>
                            <div className="card_overlay2">
                                <p className="article_title2">Tianzi Mountain</p>
                                <p className="content_latest">The Tianzi Mountains are deemed sacred by many Sulamitos who used to inhabit the outer regions of Hunan. </p>
                                <p className="article_subtitle1"><small className='travel_text'>Travel</small><small> / </small><small>Posted on 16/12/2022</small></p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="image1" src={LatestOne} alt="image1"></img>
                            <div className="card_overlay2">
                                <p className="article_title2">Tianzi Mountain</p>
                                <p className="content_latest">The Tianzi Mountains are deemed sacred by many Sulamitos who used to inhabit the outer regions of Hunan. </p>
                                <p className="article_subtitle1"><small className='travel_text'>Travel</small><small> / </small><small>Posted on 16/12/2022</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Latest;