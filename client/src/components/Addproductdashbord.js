import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addproduct } from '../redux/productSlice';

function Addproductdashbord({ping, setping}) {
   const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispatch = useDispatch()
     const [newproduct, setnewproduct]=useState({
        id:Math.random,
        img:"",
        name:"",
        description:"",
        price:"",
        category:"",
    })
        return (
        <>
        <Button className='btnservic' onClick={handleShow}>
        Add 
        </Button>
    
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Add product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>product image</Form.Label>
            <Form.Control type="text" placeholder="Enter product URL image" onChange={(e)=>setnewproduct({...newproduct,img:e.target.value})}/>
           
          </Form.Group>

       
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>product name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" onChange={(e)=>setnewproduct({...newproduct,name:e.target.value})}/>
           
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>product description</Form.Label>
            <Form.Control type="text" placeholder="Enter product description" onChange={(e)=>setnewproduct({...newproduct,description:e.target.value})} />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>product price</Form.Label>
            <Form.Control type="text" placeholder="Enter product price" onChange={(e)=>setnewproduct({...newproduct,price:e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>product category</Form.Label>
            <Form.Control type="text" placeholder="Enter product category" onChange={(e)=>setnewproduct({...newproduct,category:e.target.value})} />
          </Form.Group>

          </Form>
    
          </Modal.Body>
          <Modal.Footer>
            <Button className='btnservic' onClick={handleClose}>
              Close
            </Button>
            <Button className='btnservic' onClick={()=>{dispatch(addproduct(newproduct)) ;setping(!ping); handleClose() } }>
           Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>

  )
}

export default Addproductdashbord