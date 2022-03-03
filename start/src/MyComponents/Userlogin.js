import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { BuySell } from './BuySell';
import  Button  from 'react-bootstrap/Button';

export const Userlogin = () => {
   
  
    
  return (
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link active" to={"/buysell"}>Buy/Sell</Link>
         </li>

        <li class="nav-item">
          <Link className="nav-link active" to="/portfolio">My Portfolio</Link>
        </li>
        
        
        
        
      </ul>
      
    </div>
  </div>
</nav>

        </div>
    )
}
