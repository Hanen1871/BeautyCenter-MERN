import React from 'react';
import Swal from 'sweetalert2'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addcommande } from '../redux/commandeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Updatecommande from './Updatecommande';
function Modalcommande({product}) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const user =useSelector((state) => state.user.user);
      const [newcommandes, setnewcommandes] = useState({
        id_user:user?._id,
        name_user:user?.name+" "+user?.lastname,
        name_product:product?.name,
        date_commande :"",
        img:product?.img,
        phone:"", 
        category:product?.category,
        price:product?.price,
        status:"non confirmed"
      })
      const dispatch=useDispatch()
      return (
    
        <>
        <Button className='btncardddd' onClick={handleShow}>
          Commander
        </Button>
       <Modal show={show} onHide={handleClose} size='lg' >
          <Modal.Header  style={{background: "rgb(255,241,248)"}}  closeButton>
            <Modal.Title  >  <h3 style={{fontFamily:"cursive" ,color:"black"}}> {product?.name}</h3> 
            </Modal.Title>
          </Modal.Header>
  <Modal.Body style={{display:"flex",background: "rgb(255,241,248)" }}>
            <div>
              <img src={product?.img} style={{width:"450px", height:"300px", boxShadow:"5px 1px 46px 3px rgba(53,45,53,0.53)", marginLeft:"20px",marginRight:"200px"}} />
            </div>
<div style={{paddingTop:"10px", paddingLeft:"60px", paddingRight:"30px", fontStyle:"italic"}}>
            <p style={{ fontFamily:"serif", fontSize:"15px", textAlign:"center", marginLeft:"10px", marginRight:"30px",color:'rgb(253,45,136)'}}>Make a commande!</p>
  
            
              <p style={{fontFamily:"cursive", paddingBottom:"10px"}}>{product?.description}</p>
              <hr/>
              <input type="date" onChange={(e)=>setnewcommandes({...newcommandes,date_commande:e.target.value})}/>

            

              <h3 style={{fontFamily:'cursive', padding:"10px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="#737373" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z">
               <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/>
               <animateTransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"/>
                  </path><path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"/>
              </path></g></svg>phone </h3>
              <hr/>
            <div style={{display:"flex", flexWrap:"nowrap", gap:"5px"}}> <select style={{width:"20px"}}>
             <option value="49">Allemagne (+49)</option>
              <option value="1">États-Unis (+1)</option>
            <option value="33">France (+33)</option>
            <option value="44">Royaume-Uni (+44)</option>
            <option value="216">Tunisia (+216)</option>
          
        </select>
    
    <input type="tel" placeholder="Number phone" onChange={(e)=>setnewcommandes({...newcommandes,phone:e.target.value})}/>
    </div>
        
            </div>
         
         
          </Modal.Body>
          <Modal.Footer style={{background: "rgb(255,241,248)"}}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        
            <Button style={{backgroundColor:"pink", border:"none"}} onClick={()=>{dispatch(addcommande(newcommandes));Swal.fire({
      title: "Commanded!",
      text: "You clicked the button!",
      icon: "success"
    })}}>
            Commander 
       
            </Button>
            <Updatecommande product={product}/>
    
          </Modal.Footer>
        </Modal>
        
      </>
    
  )
}

export default Modalcommande