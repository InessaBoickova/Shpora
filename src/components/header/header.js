import { Component }  from 'react';
import {Link} from "react-router-dom";
import './header.sass'
import logo from './logo.svg'

class Header extends Component{

    render(){
        return (
            <header className="header">
              <div className="header-link">
                <Link to= '/shpora' >
                    <img src="https://img.icons8.com/small/32/FFFFFF/home.png" alt='home-page'/>
                </Link>
              </div>
                <h1>Основная теория по библиотеке React</h1>
                <img src={logo} className="header-logo" alt="logo" />
            </header>
        );
    } 
}

export default Header;