
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Addstock } from './Addstock';
import axios from 'axios';

export const Adminlogin = () => {
    const [stocks, setStocks] = useState([]);
    const [show, setShow] = useState(false);
    const addStock = () => setShow(true);
    const closeModal = () => setShow(false);

    const[stockList, setStockList] = useState([]); 


    const getStock = () =>{
        axios.get("http://localhost:3002/showstock").then((response) => {
            setStockList(response.data.data);
        });
    }

    useEffect(() => {
        getStock();
    }, [])

   

    return (
        <div>
            <div className='buysell'>
            <h3>List of available stocks</h3>
            </div>
            
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {stockList.map(data => (<tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.stockname}</td>
                        <td>{data.rate}</td>
                       
                    </tr>))}
                </tbody>
            </table>
            <div className='d-flex justify-content-between'>
                

                <Button onClick={addStock} className='btn btn-primary w-30'>Add New Stock</Button>
                <Addstock show={show} onClose={closeModal} />
             </div>

        </div>
    )
}
