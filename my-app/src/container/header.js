import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Header extends Component {
    render() { 
        return (
            <React.Fragment>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                    <li><Link to="/">This is header</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                    <li> <button>search</button></li>
                    <li><Link to="/cart">This is header</Link></li>
                    </ul>
                </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Header;
