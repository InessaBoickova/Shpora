import React, { Component }  from 'react';
import
 {BrowserRouter as Router, 
  Route, 
  Routes,
} from "react-router-dom";

import Header from '../header/header'
import Home from '../pages/Home/home';
import Compon from '../pages/Compon/compon';
import Navigation from '../Navigation/navigation';
import Props from '../pages/Props/props';
import State from '../pages/State/state';
import LifeCycle from '../pages/Lifecycle/lifecycle';
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
                  <Route  path='/Props' element = {<Props/>}/>
                  <Route  path='/State' element = {<State/>}/>
                  <Route  path='/Lifecycle' element = {<LifeCycle/>}/>
                </Routes>
               </div>
           </div>
        </Router>
    );
  }
}

export default App;

