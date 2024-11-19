
import React, { useState } from 'react'
import { updateuser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Editdashborduser({ping, setping, user}) {
  
        const users = useSelector((state) => state.user.userlist); // Si 'users' est dans le state
     
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispatch = useDispatch()
        const [edited, setedited]=useState({
            name:user?.name,
            lastname:user?.lastname,
            email:user?.email,
            category:user?.category,
            phone:user?.phone
         })
         return ( 
              <>
            <Button className='btnservic' onClick={handleShow}>
            Edit 
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> {user?.name} {user?.lastname} - {user?.category} </Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
              <Form>
     
              
   
              <Form.Group className="mb-3" controlId="formBasicEmail">
            
              <Form.Select aria-label="Default select example" onChange={(e)=>setedited({...edited, category:e.target.value})}>
                <option>Choose category</option>
              <option value="user" >User</option>
      <option value="admin">Admin</option>
    
 
    </Form.Select>
               
              </Form.Group>
                    </Form>
        
        
        
              </Modal.Body>
              <Modal.Footer>
                <Button className="btnservic" onClick={handleClose}>
                  Close
                </Button>
                <Button className="btnservic" onClick={()=>{dispatch(updateuser({id:user?._id, edited}))
            ;setping(!ping)}}>
               Edit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
    

  )
}

export default Editdashborduser