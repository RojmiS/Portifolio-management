import React from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import { useState } from 'react'
import { BuySellTx } from './BuySellTx';



export const BuySell = () => {

  
  
  const [show, setShow] = useState(false);
  const buysell = () => setShow(true);
  const closeModal = () => setShow(false);

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

            <br/>
            <div className='buysell'>
            <h2>Buy/Sell Transactions</h2>
            </div>
            
            
            
               

            
            <div className='buysellbutton'>
            <h3>CLick the button for the futher transaction.</h3>
            <Button onClick ={buysell} className='btn btn-primary'>Buy/Sell</Button>
            <BuySellTx show={show} onClose={closeModal}/>
            </div>
            
            
           

        </div>
    )
}
