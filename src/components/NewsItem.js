import React from 'react';
import './NewsItem.css';

//NewsList에서 뉴스 하나의 정보 빼오기
const NewsItem=({title,description,url,urlToImage})=>{
    return(
        <div className="news_item">
            <div className="news_sub">
            <img className="news_img" align="right" src={urlToImage} alt={urlToImage}/>
            <h3>
            <a className="news_a" href={url} target="_blank" rel="noreferrer">
                {title}
            </a>
            </h3>
            <p>{description}</p>
            </div>
        </div>
    );
}

export default NewsItem;