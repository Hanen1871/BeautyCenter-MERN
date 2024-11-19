import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import  {updatecommande}  from '../redux/commandeSlice';
function Updatecommande({product}) {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
 const [edited, setedited]=useState({
    id:Math.random,
    name_user:"",
    name_product:"",
    date_commande:"",
    category: "",
    phone:"",

 })


    return (
    <>
    <Button style={{background:"pink", border:"none"}} onClick={handleShow}>
    Edit 
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{background: "rgb(255,241,248)"}} >
        <Modal.Title> Edited commande</Modal.Title>
      </Modal.Header>
      <Modal.Body >
      
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name commande</Form.Label>
        <Form.Control type="text" placeholder={product?.name_product} onChange={(e)=>setedited({...edited, name_product:e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <hr/>

        <Form.Label> Date of commande</Form.Label>
        <Form.Control type="date" placeholder={product?.date_commande} onChange={(e)=>setedited({...edited,date_commande:e.target.value})} />
       
      </Form.Group>
      <hr/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> phone</Form.Label>
        <Form.Control type="tel" placeholder={product?.phone}   onChange={(e)=>setedited({...edited,phone:e.target.value})}/>
      </Form.Group>
            </Form>
        <Button variant="secondary" onClick={handleClose} >
          Close
        </Button>
        <Button style={{background:"pink" ,marginLeft:"20px", border:"none"}} onClick={()=>dispatch(updatecommande({id:product?._id, edited}))} >
       Edit
        </Button>
        </Modal.Body>

    </Modal>
  </>
  )
}


export default Updatecommande
