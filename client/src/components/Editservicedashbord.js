import React, { useState } from 'react'
import { updateservice } from '../redux/serviceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Editservicedashbord({service,ping, setping}) {  
    const services = useSelector((state) => state.services.serviceslist);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [edited, setedited]=useState({
   
        img:service?.img,
        name:service?.name,
        description:service?.description,
        price:service?.price,
        category:service?.category,
     })
        return (
        <>
        <Button className='btnservic' onClick={handleShow}>
        Edit 
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder={service?.img} onChange={(e)=>setedited({...edited,img:e.target.value})}/>
           
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder={service?.name} onChange={(e)=>setedited({...edited,name:e.target.value})} />
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder={service?.description} onChange={(e)=>setedited({...edited,description:e.target.value})} />
           
          </Form.Group>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder={service?.price} onChange={(e)=>setedited({...edited,price:e.target.value})} />
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>category</Form.Label>
            <Form.Control type="text" placeholder={service?.category} onChange={(e)=>setedited({...edited,category:e.target.value})} />
           
          </Form.Group>
           
          </Form.Group>
                </Form>
    
    
    
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnservic" onClick={handleClose}>
              Close
            </Button>
            <Button className="btnservic" onClick={()=>{dispatch(updateservice({id:service?._id, edited}))
        ;setping(!ping)}}>
           Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      )
    }
    
    
  
export default Editservicedashbord