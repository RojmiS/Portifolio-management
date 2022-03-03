import React, { useState, useEffect }from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export const BuySellTx = ({ show, onClose }) => {

    const [userstockForm, setUserStockForm] = useState({
        type: 'buy',
        quantity: 0,
        stock_id: null,
        date: Date
        });

        const [stocks, setStocks] = useState([]);

        const [isFormValid, setIsFormValid] = useState(true)

        useEffect(() => {
            axios.get("http://localhost:3002/showstock").then((response) => {
                setStocks(response.data.data);
            });
        }, [])



const confirm = async () => {
    if(isFormValid) {
        const response = await axios.post('http://localhost:3002/userstock', userstockForm);
        console.log(response);

    } else {
        window.alert('Invalid Form')
    }
}

  return (
       <div>
           <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BUY/Sell Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Select Stockname</Form.Label>
                            <Form.Control as="select" placeholder="stocks" onChange={(e) => setUserStockForm({...userstockForm, stock_id: e.target.value})}>
                                {
                                    stocks.map((data) => {
                                        return (
                                            <option key={data.id} value={data.id}>{data.stockname}</option>
                                        )
                                    })
                                }
                  
        
      </Form.Control>
                            
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>TransactionType</Form.Label>
                            <Form.Control as="select" onChange={(e) => setUserStockForm({...userstockForm, type: e.target.value})}>
                  <option value="buy">Buy</option>
                  <option value="sell">Sell</option>
                  </Form.Control>
                  </Form.Group>
                           
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number"  placeholder="Enter Units" onChange={(e) => setUserStockForm({...userstockForm, quantity: e.target.value})}/>
                        </Form.Group>
                        
                        
                        
                        <Form.Group className="mb-3">
                            <Form.Label>TransactionDate</Form.Label>
                            <Form.Control type="date"  placeholder="Enter the transacaton date" onChange={(e) => setUserStockForm({...userstockForm, date: e.target.value})}/>
                        </Form.Group>

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={confirm}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

       </div>
   )
}
