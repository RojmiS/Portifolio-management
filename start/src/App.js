import React from 'react';
import Axios from 'axios';
import { useState } from 'react';
import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Content } from './MyComponents/Content';
import {render} from "react-dom";
import {BrowserRouter as Router, Routes, Route, browserHistory, Indexroute} from "react-router-dom";
import {Userlogin} from "./MyComponents/Userlogin";
import { AdminDashboard } from './MyComponents/AdminDashboard';
import { Home } from './MyComponents/Home';
import { Adminlogin } from './MyComponents/Adminlogin';
import { BuySell } from './MyComponents/BuySell';
import { Portfolio } from './MyComponents/Portfolio';

function App() {
  const[stockname, setStockname]= useState("");
  const[unitrate, setUnitrate]= useState(0);

  const login= () =>{
  }
  
  const addnewstock=() =>{
    Axios.post('http://localhost:3002/addadminstock',
    {
      stockname:stockname, 
      unitrate:unitrate,
    }).then(()=>{
      console.log("success");
    })
  };
  
  return (  
        <>
      
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/admin-login" element={<Adminlogin />} />
          <Route path="/buysell" element={<BuySell />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
        
      </>  
  );
}

export default App;
