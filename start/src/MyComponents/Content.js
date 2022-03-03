import React from 'react'
import Table from 'react-bootstrap/Table'
import { useState } from 'react';


export const Content = () => {

  const [sn, setSn] = useState(0);
 const [stockname, setStockname] = useState("");
 
 const [transactiontype, setTransactiontype] = useState("");
 const [quantity, setQuantity] = useState(0);
 const [amount, setAmount] = useState(0);
 const [transactiondate, setTransactiondate] = useState(Date);

 const displayInfo = () => {
   console.log(sn + stockname + transactiontype + quantity + amount + transactiondate);
 };

    return (
      <div className='app'>

      
      
        
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>S.N</th>
      <th>StockName</th>
      <th>TransactionType</th>
      <th>Quantity</th>
      <th>Amount</th>
      <th>TransactionDate</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Standard Chartered Bank</td>
      <td>Buy</td>
      <td>100</td>
      <td>500</td>
      <td>01/01/2022</td>
    </tr>
    <tr>
      <td><input type="number" 
      onChange={(event) => {setSn(event.target.value);
      }}/> 
      </td>
      <td><input type="text"
      onChange={(event) => {setStockname(event.target.value);
      }}/></td>
      <td><input type="text"
      onChange={(event) => {setTransactiontype(event.target.value);
      }}/></td>
      <td><input type="number"
      onChange={(event) => {setQuantity(event.target.value);
      }}/></td>
      <td><input type="number"
      onChange={(event) => {setAmount(event.target.value);
      }}/></td>
      <td><input type="date"
      onChange={(event) => {setTransactiondate(event.target.value);
      }}/></td>
    </tr>
    <tr>
    <td><input type="number"/></td>
      <td><input type="text"/></td>
      <td><input type="text"/></td>
      <td><input type="number"/></td>
      <td><input type="number"/></td>
      <td><input type="date"/></td>
    </tr>
    <tr>
    <td><input type="number"/></td>
      <td><input type="text"/></td>
      <td><input type="text"/></td>
      <td><input type="number"/></td>
      <td><input type="number"/></td>
      <td><input type="date"/></td>
    </tr>
  </tbody>
</Table>
<button onClick={displayInfo}>Add</button>
        </div>
    )
}
