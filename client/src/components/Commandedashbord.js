import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deletecommande } from '../redux/commandeSlice';
import Swal from 'sweetalert2'
import Editcommandedashbord from './Editcommandedashbord';
function Commandedashbord({setping,ping, text}) {
    const user =useSelector((state) => state.user.user);
    const dispatch=useDispatch()
    const commandes=useSelector((state)=>state.commande?.commandeslist);
    console.log(commandes)
    return (
        <div  className='servic'> 
        <Table responsive="lg" className='tabbbl'>
          <thead>
            <tr>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Name user</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Name product</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Date commande</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Phone</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Category</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Price</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Status</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}></th>
            <th style={{backgroundColor:"rgb(180,171,177)"}}></th>
          </tr>
        </thead>
        <tbody>
    { commandes?.filter((el)=>el?.name_user.toLowerCase().includes(text.toLowerCase())).map((el) => <tr>
            <td style={{textAlign:"center"}}>{el?.name_user}</td>
            <td style={{textAlign:"center"}}>{el?.name_product}</td>
            <td style={{textAlign:"center"}}>{el?.date_commande}</td>
            <td style={{textAlign:"center"}}>{el?.phone}</td>
            <td style={{textAlign:"center"}}>{el?.category}</td>
            <td style={{textAlign:"center"}}>{el?.price}</td>
            <td style={{textAlign:"center"}}>{el?.status}</td>
{/* <td style={{textAlign:"center"}}><select style={{width:"35px"}} value={commandes?.status} 
 onChange={(e)=>setedited({...edited, status:e.target.value})}><option>confirmed</option>
<option> no confirmed</option></select></td> */}
{/* <td><button className="btnservic"  onClick={()=>{dispatch(updatecommande({id:commandes?.status, edited
}));setping(!ping)}} >Edit</button></td> */}

<td  style={{border:"none",width:"10px"}}> <Editcommandedashbord commande={el} ping={ping} setping={setping} /></td>
            <td><button className="btnservic" onClick={()=>{dispatch(deletecommande(el?._id));Swal.fire({
  title: "deleted!",
  text: "You clicked the button!",
  icon: "success"
});setping(!ping)}}>X</button></td>
     </tr>)}  </tbody>
    </Table>
    </div>
  )
}





export default Commandedashbord