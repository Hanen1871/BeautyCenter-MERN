import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import  edituser  from '../redux/userSlice';
function Edituser({user}) {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
 const [edited, setedited]=useState({
    id:Math.random,
    name:"",
    lastname:"",
    email:"",
    phone:"",
    category:"",

 })
    return (
    <>
    <Button variant="primary" onClick={handleShow}>
    Edit user
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>user name</Form.Label>
        <Form.Control type="text" placeholder={user.name} onChange={(e)=>setedited({...edited,name:e.target.value})}/>
       
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>lastname</Form.Label>
        <Form.Control type="text" placeholder={user.lastname} onChange={(e)=>setedited({...edited,lastname:e.target.value})} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder={user.email} onChange={(e)=>setedited({...edited,email:e.target.value})} />
       
      </Form.Group>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone</Form.Label>
        <Form.Control type="text" placeholder={user.phone} onChange={(e)=>setedited({...edited,phone:e.target.value})} />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder={user.categry} onChange={(e)=>setedited({...edited,category:e.target.value})} />
       
      </Form.Group>
       
      </Form.Group>
            </Form>



      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>dispatch(edituser({id:user.id, edited}))} >
       Edit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}


export default Edituser
