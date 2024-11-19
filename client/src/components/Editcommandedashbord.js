import React, { useState } from 'react'
    import { updateproduct } from '../redux/productSlice';
    import { useDispatch, useSelector } from 'react-redux';
    import Modal from 'react-bootstrap/Modal';
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import { updatecommande } from '../redux/commandeSlice';
function Editcommandedashbord({ping, setping, commande}) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispatch = useDispatch()
        const [edited, setedited]=useState({
                name_user:commande?.name_user,
                name_product: commande?.name_product,
                date_commande: commande?.date_commande,
                phone: commande?.phone,
                price:commande?.price,
                status: commande?.status,
         })

     return (
            <>
            <Button className='btnservic' onClick={handleShow}>
            Edit 
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> {commande?.name_user}:{commande?.name_product} - {commande?.status}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
              <Form>  
              <Form>

              <Button className='btnservic' onClick={handleShow}>
        Edit 
        </Button>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited, status:e.target.value})}>
           <option>Choose category</option>
         <option value="confirmed" >confirmé</option>
    <option value="non confirmed">Non confirmé</option>
    
    
    </Form.Select>
          
         </Form.Group>
               </Form>
                    </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btnservic" onClick={handleClose}>
                  Close
                </Button>
                <Button className="btnservic" onClick={()=>{dispatch(updatecommande({id:commande?._id, edited}))
            ;setping(!ping)}}>
               Edit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
          )
        
}

export default Editcommandedashbord