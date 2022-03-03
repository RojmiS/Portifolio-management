import React, { useDebugValue, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

export const Portfolio = () => {

  const[portfolioList, setPortfolioList] = useState([]);

  const getPortfolio = () =>{
    axios.get("http://localhost:3002/user/showportfolio").then((response) => {
        setPortfolioList(response.data.data);
    });
}



useEffect(() => {
  getPortfolio();
}, [])

  const getTotalUnits = () => {
    return portfolioList.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0)
  }

  

  const getTotalInvestment = () => {
    return portfolioList.reduce((acc, current) => {
      return acc + (current.quantity * current.rate);
    }, 0)
  }

  const getSoldAmount = () => {
    return portfolioList.reduce((acc, current) => {
      return acc + (current.quantity * 400);
    }, 0)
  }

  const getCurrentAmount = () => {
    return portfolioList.reduce((acc, current) => {
      return acc +  current.rate;
    }, 0)
  }

  const getProfitLoss = () => {
    return portfolioList.reduce((acc, current) => {
      return acc + (current.quantity * (400)- current.quantity * current.rate);
    }, 0)
  }




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
            <h2>MY PORTFOLIO</h2>
            </div>
            <hr/>
             

      <table class="table">
  <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">StockNames</th>
      <th scope="col">Total Units</th>
      <th scope="col">Total Investment</th>
      <th scope="col">Sold Amount</th>
      <th scope="col">Current Amount</th>
      <th scope="col">Profit/Loss</th>


    </tr>
  </thead>
  <tbody>
  {portfolioList.map(data => (<tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.stockname}</td>
                        <td>{data.quantity}</td>
                        <td>{data.quantity * data.rate}</td>
                        <td>{data.quantity * (400)}</td>
                        <td>{data.rate}</td>
                        <td>{data.quantity * (400)- data.quantity * data.rate}</td>
                        
                    </tr>))}
  </tbody>
</table>
<br/>
<div className='total'><h3>Total</h3></div>

    <br/>
<table class="table">

  <thead>
    <tr>
      <th scope="col">Total Units</th>
      <th scope="col">Total Investment</th>
      <th scope="col">Total Sold Amount</th>
      <th scope="col">Total Current Amount</th>
     <th scope="col">Total Profit/Loss</th>

    </tr>
  </thead>
  <tbody>
  <tr>
      <td>{getTotalUnits()}</td>
      <td>{getTotalInvestment()}</td>
      <td>{getSoldAmount()}</td>
      <td>{getCurrentAmount()}</td>
      <td>{getProfitLoss()}</td>
     
     
      
      </tr>
    
    
    
    
  </tbody>
</table>




        </div>
    )
}
