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
import Key from '../pages/Key/key';
import Refs from '../pages/Refs/refs';
import Fragments from '../pages/Fragment/fragment';
import Memo from '../pages/Memo/memo';
import UseEffect from '../pages/UseEffect/useEffect';
import VirtualDOM from '../pages/Virtual_DOM/virtual_DOM';
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
                  <Route  path='/Key' element = {<Key/>}/>
                  <Route  path='/Refs' element = {<Refs/>}/>
                  <Route  path='/Fragment' element = {<Fragments/>}/>
                  <Route  path='/React.memo' element = {<Memo/>}/>
                  <Route  path='/UseEffect' element = {<UseEffect/>}/>
                  <Route  path='/Virtual_DOM' element = {<VirtualDOM/>}/>
                </Routes>
               </div>
           </div>
        </Router>
    );
  }
}

export default App;

