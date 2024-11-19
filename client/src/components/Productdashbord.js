
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { deleteproduct } from '../redux/productSlice';
import Addproductdashbord from './Addproductdashbord';
import Editproductdashbord from './Editproductdashbord';
function Productdashbord({ping,setping, text}) {
  
      // Récupérer la liste des services depuis Redux
      const products = useSelector((state) => state.product.productlist);

      const product = useSelector((state) => state.product.productlist);
    
      const [newproduct, setnewproduct] = useState({
        img: product?.img,
        name: product?.name,
        description: product?.description,
        price: product?.price,
        category: product?.category, // Assurer que 'category' est correctement mappé
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
        <div  className='.servic2'>
                          <div style={{paddingTop:"10px", paddingBottom:"0px"}}><Addproductdashbord  ping={ping} setping={setping}/></div>
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
              {products?.filter((el)=>el?.name.toLowerCase().includes(text.toLowerCase())).map((el) => (
                  <tr style={{fontSize:"14px"}}>
             
                    <td style={{ textAlign: 'center', paddingLeft:"20px", paddingRight:"20px" }}> <img src={el?.img} style={{width:"40px", borderRadius:"50%"}} /></td>
                    <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}>{el?.name}</td>
                    <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}>{el?.description}</td>
                    <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}>{el?.price}</td>
                    <td style={{ textAlign: 'center' , paddingLeft:"20px", paddingRight:"20px" }}> {el?.category}</td>
                    <td style={{border:"none",width:"10px"}}><Editproductdashbord product={el} ping={ping} setping={setping}/></td>
                   
    
                    
                    
                    <td>  <button  className="btnservic" onClick={()=>{dispatch(deleteproduct(el?._id)); Swal.fire({
      title: "deleted!",
      text: "You clicked the button!",
      icon: "success"
    });setping(!ping)}}>X</button></td>
                  </tr>
                )).reverse()}
            </tbody>
          </Table>
        </div>
 

  )
}

export default Productdashbord