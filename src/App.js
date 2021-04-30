import React,{useEffect} from "react";
import {HashRouter,Route,Link} from 'react-router-dom';
import './App.css';
import NewsList from './components/NewsList';
import Genre from './components/genre';

function App() {
  useEffect(()=>{
    //headline 20개 가져옴
    var genre=window.location.href.split('/').pop();

    console.log(genre);
    
},[]);

  return (
    <div className="App">
      <div className="header">
        <h1 className="main_txt">Korea Comprehensive News</h1>
      </div>

      <HashRouter>
        <div className="link_wrapper">
        <Link className="link" to="/">Top 20</Link>
      <Link className="link" to="/business">business</Link>
      <Link className="link" to="/entertainment">entertainment</Link>
      <Link className="link" to="/health">health</Link>
      <Link className="link" to="/science">science</Link>
      <Link className="link" to="/sports">sports</Link>
      <Link className="link" to="technology">technology</Link>
        </div>
      

      <Route path="/" exact={true} component={NewsList}></Route>
      <Route path="/business" component={Genre}></Route>
      <Route path="/entertainment" component={Genre}></Route>
      <Route path="/health" component={Genre}></Route>
      <Route path="/science" component={Genre}></Route>
      <Route path="/sports" component={Genre}></Route>
      <Route path="/technology" component={Genre}></Route>
      </HashRouter>
     
      <div className="bottom">
      <p className="bottom_txt">Copyright © 2021 All rights reserved.</p>
      <p>Yang Huijin <br/>Email: yangjinee@naver.com </p>
      </div>
    </div>
  );
}

export default App;