import React, { Component }  from 'react';
import
 {BrowserRouter as Router, 
  Route, 
  Routes,
} from "react-router-dom";

import Header from '../header/header';
import Home from '../pages/Home/home';
import Compon from '../pages/Compon/compon';
import Navigation from '../Navigation/navigation';
import './App.sass';

class App  extends  Component{
  render(){
    return (
        <Router>
            <div className="App">
              <Header/>
               <div className='App_content'>
                <Navigation/>
                <Routes>\
                  <Route  path='/' element = {<Home/>}/>
                  <Route  path='/Component' element = {<Compon/>}/>
                </Routes>
               </div>
           </div>
        </Router>
    );
  }
}

export default App;

