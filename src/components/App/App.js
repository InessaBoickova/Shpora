import { Component }  from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Header from '../header/header'
import Home from '../pages/Home/home';
import Navigation from '../Navigation/navigation';
import {Compon , Props , State , LifeCycle , Key , Refs ,Request, VirtualDom, Fragments , Memo , UseEffect , Rout , Context, Form, Events} from '../pages/pages'
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
                  <Route  path='/Events' element = {<Events/>}/>
                  <Route  path='/Key' element = {<Key/>}/>
                  <Route  path='/Refs' element = {<Refs/>}/>
                  <Route  path='/Asynchronous_requests' element = {<Request/>}/>
                  <Route  path='/Virtual_DOM' element = {<VirtualDom/>}/>
                  <Route  path='/Fragment' element = {<Fragments/>}/>
                  <Route  path='/React.memo' element = {<Memo/>}/>
                  <Route  path='/UseEffect' element = {<UseEffect/>}/>
                  <Route  path='/Router' element = {<Rout/>}/>
                  <Route  path='/Context' element = {<Context/>}/>
                  <Route  path='/Form' element = {<Form/>}/>
                </Routes>
               </div>
           </div>
        </Router>
    );
  }
}

export default App;

