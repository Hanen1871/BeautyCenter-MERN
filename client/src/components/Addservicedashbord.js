import React from 'react'
    import { useState } from 'react';
    import Modal from 'react-bootstrap/Modal';
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import { useDispatch } from 'react-redux';
import { addservice } from '../redux/serviceSlice';
function Addservicedashbord({ping, setping}) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispatch = useDispatch()
     const [newservice, setnewservice]=useState({
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
            <Modal.Title> Add service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>service image</Form.Label>
            <Form.Control type="text" placeholder="Enter service URL image" onChange={(e)=>setnewservice({...newservice,img:e.target.value})}/>
           
          </Form.Group>

       
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>service name</Form.Label>
            <Form.Control type="text" placeholder="Enter service name" onChange={(e)=>setnewservice({...newservice,name:e.target.value})}/>
           
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>service description</Form.Label>
            <Form.Control type="text" placeholder="Enter service description" onChange={(e)=>setnewservice({...newservice,description:e.target.value})} />
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>service price</Form.Label>
            <Form.Control type="text" placeholder="Enter service price" onChange={(e)=>setnewservice({...newservice,price:e.target.value})} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>service category</Form.Label>
            <Form.Control type="text" placeholder="Enter service category" onChange={(e)=>setnewservice({...newservice,category:e.target.value})} />
          </Form.Group>

          </Form>
    
          </Modal.Body>
          <Modal.Footer>
            <Button className='btnservic' onClick={handleClose}>
              Close
            </Button>
            <Button className='btnservic' onClick={()=>{dispatch(addservice(newservice)) ;setping(!ping); handleClose() } }>
           Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    






  )
}

export default Addservicedashbord