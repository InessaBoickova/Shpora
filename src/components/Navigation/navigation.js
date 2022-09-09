import React, { Component }  from 'react';
import {
    NavLink,
  } from 'react-router-dom';
import './navigation.sass'

class Navigation extends Component{
    render(){
       return(
       <div className="navigation">
        <h2>Темы:</h2>
         <nav>
            <NavLink to='/Component' activeClassName={' active'} className='navigation_link'>Component</NavLink>
            <NavLink to="/Props" activeClassName={' active'} className='navigation_link'>Props</NavLink>
            <NavLink to='/State'activeClassName={' active'} className='navigation_link'>State</NavLink>
            <NavLink to="/Lifecycle"activeClassName={' active'} className='navigation_link'>Lifecycle</NavLink>
            <NavLink to="/Events"activeClassName={' active'}className='navigation_link'>Events</NavLink>
            <NavLink to="/Key"activeClassName={' active'}className='navigation_link'>Key</NavLink>
            <NavLink to="/Refs"activeClassName={' active'}className='navigation_link'>Refs</NavLink>
            <NavLink to="Asynchronous_requests" activeClassName={' active'}className='navigation_link'>Asynchronous requests</NavLink>
            <NavLink to="/Virtual DOM" activeClassName={' active'}className='navigation_link'>Virtual DOM</NavLink>
            <NavLink to="/Fragment" activeClassName={' active'}className='navigation_link'>Fragment</NavLink> 
            <NavLink to="/React.memo" activeClassName={' active'}className='navigation_link'>React.memo</NavLink> 
            <NavLink to="/UseEffect" activeClassName={' active'}className='navigation_link'>UseEffect</NavLink> 
            <NavLink to="/Router" activeClassName={' active'}className='navigation_link'>Router</NavLink> 
            <NavLink to="/Context"activeClassName={' active'} className='navigation_link'>Context</NavLink> 
            <NavLink to="/Form"activeClassName={' active'} className='navigation_link'>Form</NavLink> 
        </nav>
       </div>
    )}
}

export default Navigation;