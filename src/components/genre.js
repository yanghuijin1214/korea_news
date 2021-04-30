import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import NewsItem from './NewsItem';
import Loader from "react-loader-spinner";

//로딩 spinner 기능
 function Loader1() {
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
        //url에서 장르 이름 가져오기
        setGenre(window.location.href.split('/').pop());

        const getArticles = async()=>{
            //localhost에서만 돌아가는 news api
            //const res=await Axios.get("https://newsapi.org/v2/top-headlines?country=kr&category="+window.location.href.split('/').pop()+"&apiKey=c06ac517cf4b4576b081cdd53f9ef74e");
            
            //github의 json으로 axios 수정
            const res=await Axios.get("https://raw.githubusercontent.com/yanghuijin1214/news_json/main/"+window.location.href.split('/').pop()+".json");
            
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