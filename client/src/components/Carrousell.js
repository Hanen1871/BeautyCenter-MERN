import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';



function Carrousell() {
return(
<div style={{display:"inline-block",paddingLeft:"100px"}}>
   <div className=' container' style={{paddingTop:"20px"}}>    
  <Carousel>
  <Carousel.Item interval={1000}>
    <Image  src='capture 1.png' className='img-fluid center' style={{width:"1000px", height:"400px", borderTopRightRadius:"10%",borderTopLeftRadius:"20%", paddingLeft:"43px", paddingRight:"49px"}} />
    <Carousel.Caption>
      <h3 style={{marginBottom:"20px", marginLeft:"100px", fontSize:"24px"}}>Beautiful hair is a never ending quest</h3>
      <p style={{marginBottom:"40px", marginLeft:"100px", fontSize:"15px"}}>Make your hair hydrate, protecte and revive with our best styling products. Curl and gain volume.</p>
      <button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink", color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>READ MORE</button>
      </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <Image src='capture2.png' className='img-fluid center' style={{width:"1000px", height:"400px", borderTopRightRadius:"10%",borderTopLeftRadius:"20%", paddingLeft:"43px", 
      paddingRight:"49px"}}/>
    <Carousel.Caption>
      <h3  style={{marginBottom:"20px", marginLeft:"100px", fontSize:"24px"}}> As you need time for yourself
      </h3>
      <p style={{marginBottom:"40px", marginLeft:"100px", fontSize:"15px"}}>Our Beauty Center is an oasis of calm, a destination that allows us to enjoy peace and serenity and body .
      </p>
      <button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink",color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>READ MORE</button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <Image src='capture3.png' className='img-fluid center' style={{width:"1000px", height:"400px", borderTopRightRadius:"10%", borderTopLeftRadius:"20%", paddingLeft:"43px", paddingRight:"49px"}} />
    <Carousel.Caption>
      <h3 style={{marginBottom:"20px", marginLeft:"100px", fontSize:"24px"}}>Be smart. Be daring. Be purely beautiful.
      </h3>
      <p style={{marginBottom:"40px", marginLeft:"100px", fontSize:"15px"}}>
      A hairdresser who loves her is part of every beautiful women!
      </p>
      <button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink", color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>READ MORE</button>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
</div>
</div>         
         
)}  
         
         
         
         
         
         
         
         
         
 

export default Carrousell;