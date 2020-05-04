import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React, { useRef } from 'react';
import './App.css';

import Header from './components/00-header';
import Blog from './components/01-blog';


function App() {

  let blogRef = useRef();

  const scrollToBlog = () => {
    window.scrollTo({
      behavior: "smooth",
      top: blogRef.current.offsetTop
    });
  }

  return (

    // <Router>
    //   <div>
    //     <div id="header"></div>
    //     <div className="text-center" >
    //       <div className="display-4 my=4" id="title">Hello !</div>
    //       <div id="background-users">
    //         <button id="button-users">
    //           <Link to='/blog' href="">+</Link>
    //         </button>
    //       </div>
    //     </div>

    //     <Switch>
    //       <Route path="/blog">
    //         <Blog />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router >

    <div>

      <div>
        <div id="header">
          <div className="display-4" id="title">Hello !</div>
          <button id="button-users" onClick={() => scrollToBlog()}>+</button>
        </div>
      </div>

      <div ref={blogRef}>
        <Blog />
      </div>

    </div>
  );
}

export default App;