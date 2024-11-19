import React from 'react'
import Modalservice from './Modalservice'
import { useSelector } from 'react-redux';



function Servicecard({service}) {
  const user =useSelector((state) => state.user.user);
  return (
   
<div style={{ display:'flex', justifyContent:"space-around", flexDirection:"column" ,flexWrap:"wrap",justifyContent:"center",   boxShadow: "5px 1px 46px -8px rgba(221,103,183,0.57)",width:"300px", borderTopLeftRadius:"30px" 
   , marginTop:"40px"}}  >
  <div >  
<img className="cardd" src={service?.img} alt  style={{  cursor: 'pointer', maxWidth:"300px", minWidth:"300px",maxHeight:"250px", minHeight:"250px",borderTopLeftRadius:" 30px",borderBottomRightRadius:"30px", marginTop:"0px", border:"none"}} />
</div>
<div style={{ display:'flex',flexDirection:'column', flexWrap:"wrap",justifyContent:"center", marginTop:"6px", textAlign:"center", margin:"auto"}} >
<p style={{fontFamily:"cursive" , fontSize:"12px", fontWeight:"bold", paddingTop:"20px", color:'pink'}} >{service?.name}</p>
<p style={{fontFamily:"cursive" , fontSize:"10px",marginRight:"80px", marginLeft:"20px" , color:'white' }} >{service?.description}</p> </div>
    <p style={{fontFamily:"cursive" , fontSize:"10px", fontWeight:"bolder", color:'white', marginLeft:"20px"}} >{service?.price}</p> 
    {user?<Modalservice service={service}/>:null}
 

</div>

  )
}

export default Servicecard