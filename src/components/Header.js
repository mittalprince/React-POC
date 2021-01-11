import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component{
   render(){
       return(
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
               <Link to="/" className="navbar-brand" href="#"><h1>React POC</h1></Link>

               <div className="collapse navbar-collapse" id="navbarNav">
                   <ul className="navbar-nav">
                       <li className="nav-item active">
                           <NavLink to="/" className="nav-link" href="#">Add new </NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink to="/viewlist" className="nav-link" href="#">View list</NavLink>
                       </li>
                   </ul>
               </div>

           </nav>
       );
   }
}

export default Header;
