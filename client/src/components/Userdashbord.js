import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { deleteuser, updateuser } from '../redux/userSlice';
import Editdashborduser from './Editdashborduser';


function Userdashbord({setping, ping, text}) {

    const users = useSelector((state) => state.user.userlist); // Si 'users' est dans le state
    const user = useSelector((state) => state.user.user); 
    const dispatch = useDispatch()
    // const [edited, setedited]=useState({
    //   name:user?.name,
    //   lastname:user?.lastname,
    //   email:user?.email,
    //   password:user?.password,
    //   category:user?.category,
    //   phone:user?.phone, 
    // })
  return (
    <div style={{padding:"10px 10px 10px 10px", marginRight:"10px"}}>
     
    <Table responsive="lg">
      <thead style={{backgroundColor:"gray" ,marginRight:"10px"}}>
        <tr style={{textAlign:"center"}}>
          <th  style={{backgroundColor:"rgb(180,171,177)"}}>name </th>
          <th  style={{backgroundColor:"rgb(180,171,177)"}}>lastname</th>
          <th  style={{backgroundColor:"rgb(180,171,177)"}}>email</th>
  
          <th  style={{backgroundColor:"rgb(180,171,177)"}}>category</th>
          <th style={{backgroundColor:"rgb(180,171,177)"}}></th>
          <th style={{backgroundColor:"rgb(180,171,177)"}}></th>
        </tr>
      </thead>
      <tbody>
      { users?.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el)=>
         <tr>
         
          <td style={{textAlign:"center"}}>{el?.name}</td>
          <td style={{textAlign:"center"}}>{el?.lastname}</td>
          <td style={{textAlign:"center"}}>{el?.email}</td>
          <td style={{textAlign:"center"}}>{el?.category}</td>
          {/* <td> <select  value={user?.category}  onChange={(e)=>setedited({...edited,category:e.target.value})} >

            <option > admin </option>
            <option >user</option></select> </td>
          <td><button className="btnservic" onClick={()=>{dispatch(updateuser({id:user?.category, edited }));setping(!ping)}}>Edit</button></td> */}


          <td><Editdashborduser ping={ping} setping={setping} user={el}/></td>
          <td><button className="btnservic"  onClick={()=>{dispatch(deleteuser(el?._id));Swal.fire({
  title: "deleted!",
  text: "You clicked the button!",
  icon: "success"
});setping(!ping)}}>X</button></td>  


          </tr>)}  </tbody>

  
</Table>
</div>
  )
}

export default Userdashbord