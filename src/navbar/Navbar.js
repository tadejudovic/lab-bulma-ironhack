import React from 'react';
import CoolButton from '../CoolButton/CoolButton';
import './Navbar.css';

function Navbar () { 
    return ( 
        <div>
<nav className="navbar-is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
   </img>
   
    </a>
    
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a className="navbar-item" href="https://bulma.io/">
       
        Home
    
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
          Docs
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
            Overview
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/overview/modifiers/">
            Modifiers
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
            Form
          </a>
          <hr className="navbar-divider">
          </hr>
          <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
            Elements
          
          </a>
          <a class="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </a>
        </div>
      </div>
    </div>

  
        </div>

        <div className="endButtons">
<CoolButton class="button is-primary" name="Sign Up" className="Signup"></CoolButton>
<CoolButton class="button is-link is-active" name="Login" className="Login"></CoolButton>

    </div> 
      
    

</nav>
            
        </div>
    )
}


export default Navbar;