import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateproduct } from '../redux/productSlice';
import { useParams } from 'react-router-dom';
function Editproductdashbord({ping, setping,product}) {
 
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const dispatch = useDispatch()
        const params = useParams();
        const products = useSelector((state)=>state.product.productlist);
        // const product=products?.filter((el)=>el._id === params.id)[0]

        const [edited, setedited]=useState({
                img:product?.img,
                name: product?.name,
                description: product?.description,
                price: product?.price,
                category:product?.category,
                // status: product?.status,
        
         })
            return (
            <>
            <Button className='btnservic' onClick={handleShow}>
            Edit 
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> {product?.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
              <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.img} onChange={(e)=>setedited({...edited,img:e.target.value})} />
        </Form.Group>
               </Form>
               <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.images[0]} onChange={(e)=>setedited({...edited,images:e.target.value})} />
        </Form.Group>
               </Form>
               <Form> 
               <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.images[1]} onChange={(e)=>setedited({...edited,images:e.target.value})} />
        </Form.Group>
               </Form> 
               <Form> 
               <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.images[2]} onChange={(e)=>setedited({...edited,images:e.target.value})} />
        </Form.Group>
               </Form>
          
               <Form> 
               <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.images[3]} onChange={(e)=>setedited({...edited,images:e.target.value})} />
        </Form.Group>
               </Form>

         <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Control type="text" placeholder={product?.name}onChange={(e)=>setedited({...edited, name:e.target.value})}/>
         </Form.Group>
               </Form>
               <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.description} onChange={(e)=>setedited({...edited,description:e.target.value})} />
        </Form.Group>
               </Form>
               <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.price} onChange={(e)=>setedited({...edited,price:e.target.value})} />
        </Form.Group>
               </Form> 
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder={product?.categry} onChange={(e)=>setedited({...edited,category:e.target.value})} />
        </Form.Group>
               </Form>
           

              </Modal.Body>
              <Modal.Footer>
                <Button className="btnservic" onClick={handleClose}>
                  Close
                </Button>
                <Button className="btnservic" onClick={()=>{dispatch(updateproduct({id:product?._id, edited}))
            ;setping(!ping)}}>
               Edit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
      











  )
}

export default Editproductdashbord