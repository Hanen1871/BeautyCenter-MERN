import React, { useRef, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deletereservation, updatereservation } from '../redux/reservationSlice';
import Swal from 'sweetalert2'
import Editreservationdashbord from './Editreservationdashbord';


function Reservationdashbord({ping,setping, text}) {
    const user =useSelector((state) => state.user.user);

  
const dispatch=useDispatch()
    const reservations=useSelector((state)=>state.reservations?.reservationslist);

  
    //    const [edited, setedited]=useState({
    //     name_user:reservation?.name_user,
    //         name_service: reservation?.name_service,
    //         date_reservation: reservation?.date_reservation,
    //         phone: reservation?.phone,
    //         price:reservation?.price,
    //         status: reservation?.status,
    
    //  })

    return (
        <div  >
         
        <Table responsive="lg" className='tabbbl'>
          <thead>
            <tr>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Name user</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Name Service</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Date reservation</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Phone</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Category</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Price</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}>Status</th>
            <th  style={{backgroundColor:"rgb(180,171,177)"}}></th>
            <th style={{backgroundColor:"rgb(180,171,177)"}}></th>
         
          </tr>
        </thead>
        <tbody>
    { reservations?.filter((el)=>el.name_user.toLowerCase().includes(text.toLowerCase())).map((el)=> <tr>
            <td style={{textAlign:"center"}}>{el?.name_user}</td>
            <td style={{textAlign:"center"}}>{el?.name_service}</td>
            <td style={{textAlign:"center"}}>{el?.date_reservation}</td>
            <td style={{textAlign:"center"}}>{el?.phone}</td>
            <td style={{textAlign:"center"}}>{el?.category}</td>
            <td style={{textAlign:"center"}}>{el?.price}</td>

            <td style={{textAlign:"center"}}>{el?.status}</td>
{/* <td style={{textAlign:"center"}}><select style={{width:"35px"}} value={reservations?.status} 
 onChange={(e)=>setedited({...edited, status:e.target.value})}><option>confirmed</option>
<option> no confirmed</option></select></td> */}
{/* <td><button className="btnservic"  onClick={()=>{dispatch(updatereservation({id:reservations?.status, edited
}));setping(!ping)}} >Edit</button></td> */}

<td  style={{border:"none",width:"10px"}}> <Editreservationdashbord ping={ping} setping={setping} reservation={el}/></td>

            <td><button className="btnservic" onClick={()=>{dispatch(deletereservation(el?._id));Swal.fire({
  title: "deleted!",
  text: "You clicked the button!",
  icon: "success"
});setping(!ping)}}>X</button></td>
     </tr>)}  </tbody>
    </Table>
    </div>
      )
    }
export default Reservationdashbord