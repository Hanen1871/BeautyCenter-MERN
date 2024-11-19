import React, { useState } from 'react'
import Servicecard from './Servicecard';
import { useSelector } from 'react-redux';

function Care() {
  const services=useSelector((state)=>state.services.serviceslist);
  console.log(services)
  const [text, settext] = useState("")

  return (
   


< div>

<input type="text" onChange={(e)=>settext(e.target.value)} style={{borderRadius:"20px", display:'flex', justifySelf:"flex-end", marginBottom:"20px", marginRight:"20px"}}/>
<div className='cardd' >

{services?.filter((el)=>el?.category=="Care" && el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=><Servicecard service={el}/>)} 
</div>
</div>
  )
}



export default Care