import { Button } from 'bootstrap';
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';


function Navbarr({ping, setping}) {
  const user =useSelector((state) => state.user.user);
  const dispatch=useDispatch();
  return (
  <div>
      <div style={{display:'flex', justifyContent:"center", alignItems:"center",flexWrap:'wrap'}}>
      <div style={{textDecoration:"none", color:"white", fontWeight:"bold", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <img src='beautiful-female-face-portrait-beauty-salon-vector-18729642-removebg-preview (1).png' style={{width:"100px",height:"80px" }}/>
        <div style={{display:"flex", justifyContent:"right"}}>

        </div>
        </div>
      
      </div>
         
         <div style={{display: "flex",
    width: "100%",
    justifyContent: "space-around",
    padding:" 0 330px"}}>
        <Link style={{textDecoration:"none"}} to={"/home"}> <Nav.Link href="#action1" style={{ fontFamily:"cursive",  textDecoration:"none",  color:"white", fontWeight:"bold", justifyContent: "space-around", fontSize:"15px" }}>Home</Nav.Link></Link>
        <Link style={{textDecoration:"none"}} to={"/about"}> <Nav.Link href="#action2" style={{fontFamily:"cursive",textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"15px"}}>About</Nav.Link> </Link>

        <Link style={{textDecoration:"none"}} to={"/services"}> <NavDropdown title="Services"id="basic-nav-dropdown"   style={{ fontFamily:"cursive",textDecoration:"none",  color:"white", fontWeight:"bold", fontSize:"15px"}}> 
        <Link style={{textDecoration:"none"}} to={"/nails"}>   <NavDropdown.Item href="#action/3.1" >Nails</NavDropdown.Item></Link>
        <Link style={{textDecoration:"none"}} to={"/hair"}>      <NavDropdown.Item href="#action/3.2">Hair</NavDropdown.Item> </Link>
        <Link style={{textDecoration:"none"}} to={"/makeup"}>    <NavDropdown.Item href="#action/3.3">Makeup</NavDropdown.Item></Link>
        <Link style={{textDecoration:"none"}} to={"/care"}> <NavDropdown.Item href="#action/3.3">Care</NavDropdown.Item></Link>
        <Link style={{textDecoration:"none"}} to={"/massage"}>  <NavDropdown.Item href="#action/3.3">Massage</NavDropdown.Item></Link>


          </NavDropdown>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/shop"}>  <Nav.Link href="#action2" style={{ fontFamily:"cursive",textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"15px"}}>Shop</Nav.Link></Link>
          <Link style={{textDecoration:"none"}} to={"/contact"}>  <Nav.Link href="#action2" style={{ fontFamily:"cursive",textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"15px"}}>Contact</Nav.Link>

 </Link>
            {user?.category=="admin"?<Link style={{textDecoration:"none"}} to={"/dashbord"}> <Nav.Link href="#action2" style={{ fontFamily:"cursive",textDecoration:"none", color:"white", fontWeight:"bold", fontSize:"15px"}}>Dashbord</Nav.Link>

</Link>:null}
          {user? <div className='divicons'>
           <Link to="/profil"  title='profile user'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></Link>
          <button onClick={()=>{dispatch(logout()); setping(!ping)}}  title='Logout'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg></button> 
            </div>:<div className='divicons'><Link to="/login"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg></Link></div>}
        
  {user?
          <div className='title'>
            <h3>Welcome {user?.name}</h3>
          </div>:null
      }





        </div>
      
      </div>

  



  )}
export default Navbarr