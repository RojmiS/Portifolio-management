import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


export const Addstock = ({ show, onClose }) => {



    const [stockForm, setStockForm] = useState({
        name: '',
        units: 0
    });

    const [isFormValid, setIsFormValid] = useState(true)

    const saveStock = async () => {
        if(isFormValid) {
            const response = await axios.post('http://localhost:3002/addadminstock', stockForm);
            console.log(response);

        } else {
            window.alert('Invalid Form')
        }
    }

    

    return (
        <div>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>BUY/SELL</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Stockname</Form.Label>
                            <Form.Control onChange={(e) => setStockForm({...stockForm, name: e.target.value})} type="text" placeholder="Enter stockname" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Unitrate</Form.Label>
                            <Form.Control type="number" onChange={(e) => setStockForm({...stockForm, units: e.target.value})} placeholder="Enter rate" />
                        </Form.Group>
                        
                        {/* <Button variant="primary" type="submit" onClick={addnewstock}>
                            Submit
                        </Button> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveStock}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
