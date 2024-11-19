import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  {addreservation} from '../redux/reservationSlice';
import { useDispatch } from 'react-redux';
function Addreservation() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
 const [newreservation, setnewreservation]=useState({
    id:Math.random,
    name:"",
    description:"",
    img:"",
 })
    return (
    <>
    <Button variant="primary" onClick={handleShow}>
    Add reservation
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Add reservation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>reservation name</Form.Label>
        <Form.Control type="text" placeholder="Enter reservation name" onChange={(e)=>setnewreservation({...newreservation,name:e.target.value})}/>
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>reservation description</Form.Label>
        <Form.Control type="text" placeholder="Enter reservation description" onChange={(e)=>setnewreservation({...newreservation,description:e.target.value})} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>reservation image</Form.Label>
        <Form.Control type="text" placeholder="Enter reservation image" onChange={(e)=>setnewreservation({...newreservation,img:e.target.value})} />
       
      </Form.Group>
      </Form.Group>
      </Form>



      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(addreservation(newreservation)) ; handleClose() } }>
       Add
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Addreservation