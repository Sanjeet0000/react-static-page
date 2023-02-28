import './../styles/MainArticle.css';
import ArticleOne from "./../images/ArticleOne.png";
import ArticleTwo from "./../images/ArticleTwo.jpg";
import ArticleThree from "./../images/ArticleThree.jpg";

function MainArticle(){
    return(
        <>
        <div className="main_article_container">
            <div className="sub_main">
                    <div className="card1">
                        <img src={ArticleOne} alt='img'></img>
                        <div className="card_overlay">
                            <p className="article_title1">Article Title</p>
                            <p className="article_subtitle1"><small>Travel</small><small> / </small><small>Posted on 16/12/2022</small></p>
                        </div>
                    </div>
                <div className="right_section">
                    <div className="card2">
                        <img src={ArticleTwo} alt='img'></img>
                        <div className="card_overlay">
                            <p className="article_title1">Article Title</p>
                            <p className="article_subtitle1"><small>Travel</small><small> / </small><small>Posted on 16/12/2022</small></p>
                        </div>
                    </div>
                    <div className="card3">
                        <img src={ArticleThree} alt='img'></img>
                        <div className="card_overlay">
                            <p className="article_title1">Article Title</p>
                            <p className="article_subtitle1"><small>Travel</small><small> / </small><small>Posted on 16/12/2022</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainArticle;