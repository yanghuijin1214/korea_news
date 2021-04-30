import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import NewsItem from './NewsItem';
import Loader from "react-loader-spinner";

 function Loader1() {
    //other logic
      return (
          <div className="spinner">
              <Loader
          type="Puff"
          color="#645244"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
          </div>
        
      );
}

const Genre=()=>{
     const [articles,setArticles]=useState([]);
     const [genre,setGenre]=useState("");
    //외부 api를 통해 뉴스목록 가져오기
    useEffect(()=>{
        //headline 20개 가져옴
        setGenre(window.location.href.split('/').pop());
        
        const getArticles = async()=>{
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const res=await Axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=kr&category="+genre+"&apiKey=c06ac517cf4b4576b081cdd53f9ef74e`);
            
            setArticles(res.data.articles);
        };
        
        getArticles();
    },[]);
    return(<div>
        <section id="header">
        <span id="header_bef"></span>
        <h1 className="header_txt">{genre}</h1>
        <span id="header_aft"></span>
        </section>

        <div className="news_list">
        {articles.length!==0?articles.map(({title,description,url,urlToImage}) => (
            <NewsItem title={title} description={description} url={url} urlToImage={urlToImage}/>
        )):<Loader1/>}
    </div>

    </div>
    );
}

export default Genre;