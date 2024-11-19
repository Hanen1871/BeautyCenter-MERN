import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from '../redux/userSlice'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [register, setRegister] = useState({
    name:"",
    lastname:"",
    email:"",
    password:""
  })
  const dispatch = useDispatch();
  const navigate =useNavigate();
  return (
    <div style={{margin:"auto"}}>
<div className="wrapper" >
    <form onSubmit={(e) => e.preventDefault()} className="form-signin">
      
   
  <h4 className="form-signin-heading" style={{paddingTop:"30px", marginLeft:"20px"}}>  Please register </h4>
  <div style={{marginRight:"10px", marginRight:"10px"}}>
  
    <input 
     className="form-control"
      type="text"
       placeholder="username" 
       name="name" 
       required="" 
       autofocus=""
       onChange={(e) => setRegister({...register, name: e.target.value})}
       />
    
    <input
     className="form-control"
      type="text"
       placeholder="lastname" 
       name="lastname" 
       required="" 
       autofocus=""
       onChange={(e) => setRegister({...register, lastname: e.target.value})}
       />
    
    <input
     className="form-control"
      type="text"
       placeholder="Email Address" 
       name="Username" 
       required="" 
       autofocus=""
       onChange={(e) => setRegister({...register, email: e.target.value})}
       />
    
    
    <input
     className="form-control" 
     type="password" 
     placeholder="Password"
      name="password" 
      required=""
      onChange={(e) => setRegister({...register, password: e.target.value})}

      /></div>

<button className="btn btn-lg btn-primary btn-block w-75 mt-2" style={{background:"blue", display:"flex",  width:"230px", height:"30px", 
    border:"none", borderRadius:"10px", backgroundColor:"rgb(177, 177, 239)"}} onClick={() => {dispatch(userRegister(register));   
      navigate("/profil");
    }}> 
    <p style={{ display:"flex",fontSize:"20px",alignSelf:"center", paddingTop:"10px", alignSelf:'center', marginLeft:"30px"}}> Register</p></button>

 <p style={{fontSize:"15px"}}> u already have account <Link to="/login">sign in
</Link>
</p> 

</form>
  </div>



    </div>
  )
}

export default Register