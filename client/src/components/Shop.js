import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Detailproduct from './Detailproduct';
import Modalcommande from './Modalcommande';

function Shop() {
  const products=useSelector((state)=>state.product.productlist);
  console.log(products)
    const [text, settext] = useState("")

  return (
      <div  style={{paddingBottom:"2200px",backgroundColor:"white", marginRight:"150px", marginLeft:"150px" }} >
    <div style={{ display:'grid', gridTemplateColumns:"1fr 1fr 1fr" ,gap:"20px",width:"230px",height:"250px",  marginLeft:"5px"}}  >

 {products?.filter((el)=>el.id_product==products?._id).map((el)=>
  
  <div> <Link to={`/detailproduct/${el._id}`}>
 <div className='cardddd' >
<img src={el?.img} alt  style={{ cursor: 'pointer', maxWidth:"250px", minWidth:"250px",maxHeight:"230px", minHeight:"230px", marginTop:"0px"}} />
</div> </Link>
<div style={{ display:'flex',flexDirection:'column', flexWrap:"wrap",justifyContent:"center", marginTop:"6px", textAlign:"center",margin:"6px 1px 0px 20px"}} >
<p style={{fontFamily:"cursive" , fontSize:"12px", fontWeight:"bold", paddingTop:"2px", color:'rgb(142,29,84)'}} >{el?.name}</p>
{/* <p style={{fontFamily:"cursive" , fontSize:"10px",marginRight:"80px", marginLeft:"20px" , color:'black' }} >{el?.description}</p> */}
<div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"2px"}}><p style={{fontFamily:"cursive" , fontSize:"10px", fontWeight:"bolder", color:'black', marginLeft:"20px"}} >{el?.price}</p> 
<p style={{fontFamily:"cursive" , fontSize:"10px", color:'black', marginLeft:"20px"}} >{el?.category}</p> </div>
<Modalcommande product={el} />
 </div>
</div>
)}
</div> </div>

  )
}

export default Shop