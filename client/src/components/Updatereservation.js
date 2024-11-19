import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import  {updatereservation}  from '../redux/reservationSlice';
function Updatereservation({service}) {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
 const [edited, setedited]=useState({
    id:Math.random,
    name_service:"",
    date_reservation:"",
    category:"",
    phone:""

 })
    return (
    <>
    <Button style={{background:"pink", border:"none"}} onClick={handleShow}>
    Edit 
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{background: "rgb(255,241,248)"}} >
        <Modal.Title> Edit reservation </Modal.Title>
      </Modal.Header>
      <Modal.Body >
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name reservation</Form.Label>
        <Form.Control type="text" placeholder={service.name_service} onChange={(e)=>setedited({...edited, name_service:e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <hr/>

        <Form.Label> Date of reservation</Form.Label>
        <Form.Control type="date" placeholder={service.date_reservation} onChange={(e)=>setedited({...edited,date_reservation:e.target.value})} />
       
      </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> phone</Form.Label>
        <Form.Control type="tel" placeholder={service.phone}   onChange={(e)=>setedited({...edited,phone:e.target.value})}/>
      </Form.Group>
            </Form>
        <Button variant="secondary" onClick={handleClose} >
          Close
        </Button>
        <Button style={{background:"pink" ,marginLeft:"20px", border:"none"}} onClick={()=>dispatch(updatereservation({id:service.id, edited}))} >
       Edit
        </Button>
        </Modal.Body>

    </Modal>
  </>
  )
}


export default Updatereservation
