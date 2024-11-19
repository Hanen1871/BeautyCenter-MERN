import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Reviews from './Reviews';
import Addtocard from './Addtocard';

function Detailproduct() {
  const [click, setclick] = useState("Description")
  const dispatch = useDispatch()
  const params = useParams();
  const products = useSelector((state)=>state.product.productlist);
  const product=products?.filter((el)=>el._id === params.id)[0]
useEffect(() => {
  var image=document.getElementById("image");

  var btn1=document.getElementById("btn1");
  var btn2=document.getElementById("btn2");
  var btn3=document.getElementById("btn3");
  var btn4=document.getElementById("btn4");

  btn1.addEventListener("click", function(){
      image.src=btn1.firstElementChild.src;
  })
  btn2.addEventListener("click", function(){
      image.src=btn2.firstElementChild.src;
  })
  btn3.addEventListener("click", function(){
      image.src=btn3.firstElementChild.src;
  })
  btn4.addEventListener("click", function(){
    image.src=btn4.firstElementChild.src;
})
}, [])

  return (
    <div style={{backgroundColor:"white", margin:"20px 90px 30px 60px"}}> 

  <div style={{display:"flex", justifyContent:"space-around",flexWrap:"nowrap",paddingTop:"10px"}}>
  
    <div className="parent" style={{paddingTop:"20px"}} >
      <div className="bigbox" style={{display:"flex", justifyContent:"space-around",flexWrap:"wrap"}}>

  <img id="image" style={{ color:'white', marginLeft:"60px", width:"890px", height:"400px", paddingTop:"30px"}} src={product?.img} alt=""/>

</div>
<div className="images" style={{display:"flex", marginLeft:"60px", justifyContent:"flex-start",flexWrap:"nowrap"}}>
 <button id="btn1"><img  alt="" src={product?.images[0]} /></button> 
 <button id="btn2"><img  alt="" src={product?.images[1]}/></button> 
 <button id="btn3"> <img  alt="" src={product?.images[2]}/></button> 
 <button id="btn4"> <img  alt="" src={product?.images[3]}/></button> 

</div> </div>
<div style={{ display:'flex',flexDirection:'column', flexWrap:"wrap",textAlign:"justify"}} >
<p style={{fontFamily:"cursive" , fontSize:"26px", fontWeight:"bold",paddingLeft:"100px", color:'black', paddingTop:"72px",paddingBottom:"5px"}} >{product?.name}</p>
<hr style={{width:"380px", marginLeft:"100px"}}/>


<p style={{fontFamily:"cursive" , fontSize:"16px",marginRight:"80px", marginLeft:"60px" ,paddingLeft:"30px", color:'black' }} >{product?.description}</p>
<hr style={{width:"380px", marginLeft:"100px"}}/>

<p style={{fontFamily:"cursive" , fontSize:"16px", fontWeight:"bolder", color:'black', paddingLeft:"100px"}} >{product?.price}</p> 
<p style={{fontFamily:"cursive" , fontSize:"16px", fontWeight:"bolder", color:'black', paddingLeft:"90px"}} >{product?.category}</p> 
<div style={{display:"flex", flexWrap:"nowrap", justifyContent:"center", marginRight:"100px"}}><input type="number" placeholder='1' 
style={{width:"30px", height:"40px", marginLeft:"300px"}}/>
<p style={{fontFamily:"cursive" , fontSize:"8px"}}> <Addtocard product={product} /> </p>
 </div></div>

    </div>
   
<div style={{paddingTop:"5px" , margin:"0px 30px 0px 30px"}}>
<ul style={{display:"flex", flexWrap:"nowrap", marginBottom:"0px", paddingLeft:"20px"}}>
  
<li  onClick={()=>setclick("Description")} >
	<a href="#tab-description" style={{textDecoration:"none",fontSize:"13px", borderLeft:"1px solid gray",borderTop:"1px solid gray", color:"black", backgroundColor:"rgb(234,233,244)" }}>
						Description	</a> 
				</li>  
        <li   onClick={()=>setclick("Reviews")} style={{marginLeft:"0px"}}>
					<a href="#tab-reviews" style={{textDecoration:"none",fontSize:"13px", borderLeft:"1px solid gray",borderTop:"1px solid gray",borderRight:"1px solid gray",  color:"black", backgroundColor:"rgb(234,233,244)" }}>
						Reviews (0)		</a>	
				</li>  
        
        </ul> 
  <hr style={{width:"100%", height:"20px", marginTop:"0px"}}/>


  </div>
    
  
  {click === "Description" && (
    <div style={{padding:"10px 30px 20px 20px"}}>
<h3 style={{fontFamily:"sans-serif",fontWeight:"bolder" , fontSize:"16px", color:'black', paddingLeft:"20px"}}>Description</h3>
<p  style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black', paddingLeft:"20px"}}>The beauty of a woman is not in a facial mode but the true beauty in a
   woman is reflected in her soul. 
It is the caring that she lovingly gives the passion that she shows. The beauty of a woman grows with the passing years.</p>
<ul style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black', paddingLeft:"40px",  listStyleType:"circle", paddingTop:"2px"}}>
<li style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black'}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</li>
<li style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black'}}>Et harum quidem rerum facilis est et expedita distinctio</li>
<li style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black'}}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</li>
<li style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black'}}>Itaque earum rerum hic tenetur a sapiente delectus</li></ul>
<p style={{fontFamily:"sans-serif" , fontSize:"12px", color:'black', paddingLeft:"20px"}}>I do not have much patience with a thing of beauty that must be explained
   to be understood.
 If it does need additional interpretation by someone other than the creator, then I question whether it has fulfilled its purpose.
 </p></div>
  )}
  
  {click === "Reviews" && (
    <div style={{padding:"5px 40px 20px 40px"}}>
      <Reviews product={product}/>
    </div>
  )}
  
  
 
  
  </div>
  )
}

export default Detailproduct