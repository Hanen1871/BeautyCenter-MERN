import React, { useRef, useState } from 'react'
import { updateservice } from '../redux/serviceSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updatereservation } from '../redux/reservationSlice';

function Editreservationdashbord({ping, setping, reservation}){
  

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [edited, setedited]=useState({
            name_user:reservation?.name_user,
            name_service: reservation?.name_service,
            date_reservation: reservation?.date_reservation,
            phone: reservation?.phone,
            price:reservation?.price,
            status: reservation?.status,
    
     })
        return (
        <>
        <Button className='btnservic' onClick={handleShow}>
        Edit 
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> {reservation?.name_user}:{reservation?.name_service} - {reservation?.status}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          <Form>
    
          
      
          <Form>
     
              
   
     <Form.Group className="mb-3" controlId="formBasicEmail">
   
     <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited, status:e.target.value})}>
       <option>Choose category</option>
     <option value="confirmé" >confirmé</option>
<option value="non confirmé">Non confirmé</option>


</Form.Select>
      
     </Form.Group>
           </Form>
      
                </Form>
    
    
    
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnservic" onClick={handleClose}>
              Close
            </Button>
            <Button className="btnservic" onClick={()=>{dispatch(updatereservation({id:reservation?._id, edited}))
        ;setping(!ping)}}>
           Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      )
    }

export default Editreservationdashbord