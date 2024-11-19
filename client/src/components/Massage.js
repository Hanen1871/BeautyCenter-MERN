import React, { useState } from 'react'
import Servicecard from './Servicecard';
import { useSelector } from 'react-redux';

function Massage() {
  const services=useSelector((state)=>state.services.serviceslist);
  console.log(services)
  const [text, settext] = useState("")

  return (
   


<>

<input type="text" onChange={(e)=>settext(e.target.value)} style={{borderRadius:"20px", display:'flex', justifySelf:"flex-end", marginBottom:"20px", marginRight:"20px"}}/>
<div className='cardd' >

{services?.filter((el)=>el?.category=="Massage" && el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=><Servicecard service={el}/>)} 
</div>
</>


)
}

export default Massage