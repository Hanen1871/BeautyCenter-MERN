// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import Shop from './Shop';

// function Cosmetic() {
//   const products=useSelector((state)=>state.product.productlist);
//     console.log(products)
  
//     const [text, settext] = useState("")

//   return (
    
  
  
//     <>

// <input type="text" onChange={(e)=>settext(e.target.value)} style={{borderRadius:"20px", display:'flex', justifySelf:"flex-end", marginBottom:"20px", marginRight:"20px"}}/>
// <div className='cardd' >

// {products?.filter((el)=>el?.category=="Cosmetic" && el?.name.toLowerCase().includes(text.toLowerCase())).map((el)=><Shop product={el}/>)} 
// </div>
// </>
//   )

// }

// export default Cosmetic
