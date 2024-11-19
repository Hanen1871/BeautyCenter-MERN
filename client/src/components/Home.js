import React from 'react';
import Carrousell from './Carrousell';
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  return (
<div>
  <Carrousell/>
  <div  className="containerr" style={{display:"flex", flexWrap:"nowrap" }}>
<img  src='about-fotor-20241101112048.png' className="img-fluid" style={{border:"none",width:"300px", height:"420px", paddingTop:"110px", marginLeft:"190px"}} />
<div style={{marginRight:"80px", paddingTop:"120px" , marginLeft:"60px"}}  >
<h2 style={{color:"pink", fontSize:"22px"}}>About Us
</h2>
<hr style={{color:"white", fontWeight:"bold", width:"40px"}}/>


<p  style={{color:"white", fontSize:"12px"}}>Our spa treatments are peaceful and provide relaxation of mind, reducing stress, 
  and life changing services. 
  <br/>If you are attending a work or family event, or having a wedding come around, 
  we have the treatments that you need to look like yourself and feel amazing.</p>
  <button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink",color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>READ MORE</button>

  </div>
</div>

<h2 style={{color:"pink", fontSize:"22px", display:"flex", justifyContent:"center", paddingTop:"60px"}}>Our Services
</h2>
<hr style={{color:"white", fontWeight:"bold", width:"40px",marginLeft:"580px"}}/>
<div style={{display:"flex", justifyContent:"space-around", flexWrap:"nowrap"}} className='containerr'>
<div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}} className='containerr'>
<img  src='https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/thumb13-3.jpg'  style={{width:"300px", height:"200px", borderColor:"blue", borderWidth:"180px"}}/>

<h5 style={{color:"white", fontSize:"15px", paddingTop:"20px"}}>Make-up & Nails</h5>
<p style={{color:"white", fontSize:"10px",marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>We offer professional makeup and nails services with
   a look customized just for you.</p>
<button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink",color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>VIEW DETAILS</button>
</div>
<div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}className='containerr'>
<div ><img  src='https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/thumb13-1.jpg'  style={{width:"300px", height:"200px",borderBlockEndWidth:"180px" ,border:"180px", borderColor:"pink"}}/>
</div>
<h5 style={{color:"white", fontSize:"15px", paddingTop:"20px"}}>Hair & Treatments</h5>
<p style={{color:"white", fontSize:"10px",marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>Hydrate, protect and revive your hair by using our best styling products. Curl and create volume.</p>
<button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink",color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>VIEW DETAILS</button>
</div>
<div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}} className='containerr'>
<img  src='https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/thumb13-4.jpg'  style={{width:"300px", height:"200px", borderColor:"blue" ,border:"10px"}}/>

<h5 style={{color:"white", fontSize:"15px", paddingTop:"20px"}}>Massage & Wellness</h5>
<p style={{color:"white", fontSize:"10px",marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>Peaceful spa treatments for deep relaxation of the mind, reducing stress and life changing services.</p>
<button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"pink",color:"white", fontSize:"12px"}} onClick={() => window.location.href = "http://localhost:3000/home"}>VIEW DETAILS</button>
</div>



</div>


<div className='containerr' style={{display:"flex", flexWrap:"nowrap", justifyContent:"space-around" }}>
<div>
<h2 style={{color:"pink", fontSize:"22px", display:"flex", justifyContent:"center", paddingTop:"10px"}}>Best Prices in Town</h2>

<hr  style={{color:"white", fontWeight:"bold", width:"40px", justifySelf:"center"}}/>
<h3 style={{color:"pink", fontSize:"16px", display:"flex", justifyContent:"center", paddingTop:"20px"}}>GET 20% OFF</h3>

<p style={{color:"white", fontSize:"10px", display:"flex", justifyContent:"center", paddingTop:"10px"}}>ONLY BETWEEN 08:00 – 11:000</p>
<p style={{color:"white", fontSize:"10px", display:"flex", justifyContent:"center", textAlign:"center", paddingTop:"10px"}}>
Beauty begins the moment you decide to be yourself.<br/>
Nothing makes a woman more
 beautiful 
 than <br/>the belief
that she is beautiful</p>
</div>

<img src='facture.png'  style={{width:"450px", height:"200px"}}/>




</div>

<h2 style={{color:"pink", fontSize:"22px", display:"flex", justifyContent:"center", paddingTop:"10px", paddingBottom:"10px"}}>Testimonials</h2>


<hr  style={{color:"white", fontWeight:"bold", width:"40px", justifySelf:"center",  paddingBottom:"10px"}}/>


     <Carousel>
      <Carousel.Item>
      <div className='container' style={{display:"flex" , justifyContent:"space-between", flexWrap:"nowrap"}}>

<div style={{display:"flex" , justifyContent:"space-around", flexWrap:'wrap'}}>

        <img src="test11-fotor-2024110114337.png"  className='img-fluid' style={{width:"200px", height:"180px"}}   />
        <p style={{color:"white", fontSize:"8px", display:"flex", justifyContent:"center", paddingTop:"10px", marginRight:"100px", marginLeft:"100px",textAlign:"center"}} >
      Invest in your hair, it’s the crown you never take off! Simply the best in hair care.      </p>
      <h5 style={{marginBottom:"60px",color:"white", fontSize:"10px"}}>Angelina Smithson
      </h5>
  </div>





<div style={{display:"flex" , justifyContent:"center", flexWrap:'wrap'}}>
      <img src='test2-fotor-2024110114042.png' className='img-fluid' style={{width:"200px", height:"180px"}}/>
      <p style={{color:"white", fontSize:"8px", display:"flex", justifyContent:"center", paddingTop:"10px", marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>I love my hair and makeup! You guys made me look like a queen. Always a pleasure. It’s clean, comfortable, efficient and good results.
      </p>
      <h5  style={{marginBottom:"60px",color:"white", fontSize:"10px"}}> Jessica Palmer
      </h5>

 </div>
 <div style={{display:"flex" , justifyContent:"center", flexWrap:'wrap'}}>

      <img src='test3-fotor-2024110114135.png' className='img-fluid' style={{width:"200px", height:"180px"}} />
      <p style={{color:"white", fontSize:"8px", display:"flex", justifyContent:"center", paddingTop:"10px", marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>
      Great hair doesn’t happen by chance, it happens by appointment! Good hair speaks louder than words!      </p>
      <h5 style={{marginBottom:"60px",color:"white", fontSize:"10px"}}>Michelle Rian
      </h5>
      </div>
 </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container' style={{display:"flex" , justifyContent:"space-between", flexWrap:"nowrap"}}>

        
 
      <div style={{display:"flex" , justifyContent:"center", flexWrap:'wrap'}}>
  
      <img src='test3-fotor-2024110114135.png' className='img-fluid' style={{width:"200px", height:"180px"}}  />
      <p style={{color:"white", fontSize:"8px", display:"flex", justifyContent:"center", paddingTop:"10px", marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>
      Invest in your hair, it’s the crown you 
      never take off! Simply the best in hair care.      </p>
      <h5 style={{marginBottom:"60px",color:"white", fontSize:"10px"}}>Angelina Smithson
      </h5>
  
      </div>
      <div style={{display:"flex" , justifyContent:"center", flexWrap:'wrap'}}>
      <img src='test2-fotor-2024110114042.png' className='img-fluid' style={{width:"200px", height:"180px"}}/>
      <p style={{color:"white", fontSize:"8px", display:"flex", justifyContent:"center", paddingTop:"10px", marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>
        I love my hair and makeup! You guys made 
        me look like a queen. Always a pleasure.
         It’s clean, comfortable, efficient and good results.
      </p>
      <h5  style={{marginBottom:"60px",color:"white", fontSize:"10px"}}> Jessica Palmer
      </h5>

 </div>
      <div style={{display:"flex" , justifyContent:"center", flexWrap:'wrap'}}>
    <img  src='test 3-fotor-2024110114237.png' style={{width:"200px", height:"180px"}}/>
      <p style={{color:"white", fontSize:"8px", display:"flex", justifyContent:"center", paddingTop:"10px", marginRight:"100px", marginLeft:"100px",textAlign:"center"}}>
        I love this salon. They provide great customer
         service. When they give you an appointment 
         they make sure they are ready when you arrive.</p>
      <h5 style={{marginBottom:"60px",color:"white", fontSize:"10px"}}>Sarah Parker</h5>
      </div>

</div>

      </Carousel.Item>
      
    </Carousel>


<div className="image-arriere-plan" >
  <h3  style={{color:"white", fontSize:"20px", display:"flex", justifyContent:"center",paddingTop:"35px"}}> Make a Reservation
</h3>
<p style={{color:"purple", fontSize:"10px", fontWeight:"bold", display:"flex", justifyContent:"center", paddingTop:"15px"}}>We create styles for the way you look and the way you live!</p>
<button style={{marginBottom:"120px", border:"none", borderRadius:"20px", backgroundColor:"purple",color:"white", fontSize:"12px",display:"flex", justifyContent:"center"}} onClick={() =>
   window.location.href = "https://vegathemes.net/beauty-center/main/"}> CALL US NOW </button>

</div>
<h2  style={{color:"pink", fontSize:"22px", display:"flex",justifyContent:"center" , paddingTop:"50px"}}>Our Products
</h2>
<hr  style={{color:"white", fontWeight:"bold", width:"40px", justifySelf:"center",  paddingBottom:"10px"}}/>
<div  className='container' style={{display:'flex', justifyContent:"center", gap:"40px", flexWrap:'nowrap'}}>
<img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/logo1.png" style={{width:"110px", height:"80px"}}/>
<img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/logo1.png" style={{width:"110px", height:"80px"}}/>
<img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/logo5.png" style={{width:"110px", height:"80px"}}/>
<img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/logo5.png" style={{width:"110px", height:"80px"}}/>
<img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/logo3.png" style={{width:"110px", height:"80px"}}/>


</div>









</div>



  
  )
}

export default Home