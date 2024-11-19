import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Servicecard from './Servicecard';

function Hair() {
  const services=useSelector((state)=>state.services.serviceslist);
    console.log(services)
  
    const [text, settext] = useState("")

  return (
    
  
  
    <>

<input type="text" onChange={(e)=>settext(e.target.value)} style={{borderRadius:"20px", display:'flex', justifySelf:"flex-end", marginBottom:"20px", marginRight:"20px"}}/>
<div className='cardd' >

{services?.filter((el)=>el?.category=="Hair" && el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=><Servicecard service={el}/>)} 
</div>
</>
  )

}

export default Hair
