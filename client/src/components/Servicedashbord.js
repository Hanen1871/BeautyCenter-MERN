import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { addservice, deleteservice, updateservice } from '../redux/serviceSlice';
import Swal from 'sweetalert2'
import Editservicedashbord from './Editservicedashbord';
import Addservicedashbord from './Addservicedashbord';

function Servicedashbord({ service,ping,setping, text }) {
  // Récupérer la liste des services depuis Redux
  const services = useSelector((state) => state.services.serviceslist);

  const [newservice, setnewservice] = useState({
    img: service?.img,
    name: service?.name,
    description: service?.description,
    price: service?.price,
    category: service?.category, // Assurer que 'category' est correctement mappé
  });

  const dispatch = useDispatch()
const [edited, setedited]=useState({
  id:Math.random,
  img:"",
  name:"",
  description:"",
  price:"",
  category:"",
 

})


  return (
    <div  className='servic'>
      <Addservicedashbord  ping={ping} setping={setping}/>

      <Table>
        <thead>
          <tr style={{width:"100%"}}>
           
            <th style={{ backgroundColor: 'rgb(180,171,177)' , paddingLeft:"20px", paddingRight:"20px" }}>Image</th>
            <th style={{ backgroundColor: 'rgb(180,171,177)', paddingLeft:"20px", paddingRight:"20px"  }}>Name</th>
            <th style={{ backgroundColor: 'rgb(180,171,177)' , paddingLeft:"20px", paddingRight:"20px" }}>Description</th>
            <th style={{ backgroundColor: 'rgb(180,171,177)' , paddingLeft:"20px", paddingRight:"20px" }}>Price</th>
            <th style={{ backgroundColor: 'rgb(180,171,177)' , paddingLeft:"20px", paddingRight:"20px" }}>Category</th>
            <th style={{ backgroundColor: 'rgb(180,171,177)' , paddingLeft:"20px", paddingRight:"20px" }}></th>
            <th style={{ backgroundColor: 'rgb(180,171,177)' , paddingLeft:"20px", paddingRight:"20px" }}></th>

          </tr>
        </thead>
      
        <tbody >
          {services?.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())).map((el) => (
              <tr style={{fontSize:"14px"}}>
         
                <td style={{ textAlign: 'center', paddingLeft:"20px", paddingRight:"20px" }}> <img src={el?.img} style={{width:"40px", borderRadius:"50%"}} /></td>
                <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}>{el?.name}</td>
                <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}>{el?.description}</td>
                <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}>{el?.price}</td>
                <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}> {el?.category}</td>
                <td style={{border:"none",width:"10px"}}><Editservicedashbord service={el} ping={ping} setping={setping}/></td>
               

                
                
                <td>  <button  className="btnservic" onClick={()=>{dispatch(deleteservice(el?._id));Swal.fire({
  title: "deleted!",
  text: "You clicked the button!",
  icon: "success"
});setping(!ping)}}>X</button></td>
              </tr>
            )).reverse()}
        </tbody>
      </Table>
    </div>
  );
}
export default Servicedashbord
// >dispatch(updateservice({id:services.id, edited}))} 