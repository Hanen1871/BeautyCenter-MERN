import React from 'react'
import { Button } from 'bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Footer() {
  const year = new Date().getFullYear()

  return (
    <div style={{ paddingTop:"auto"}}>
      
<h2 style={{color:"pink", fontSize:"22px", display:"flex", justifyContent:"center", paddingTop:"500px"}}>Instagram

</h2>
<hr  style={{color:"white", fontWeight:"bold", width:"40px", justifySelf:"center",  paddingBottom:"10px"}}/>



<div style={{display:"flex", flexWrap:'nowrap', justifyContent:"center",paddingTop:"100px"}}>

<a className="zoom-instagram-link magnific-active" href="https://www.instagram.com/p/B-2b6YADeda/" > 
<img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/92756570_517665125565708_8368603518014069203_n-320x320.jpg"
 style={{width: "160px",  height: "150px"}} data-mfp-src="18113313013100508" 
 target="_blank" rel="noopener nofollow" title="Sunny day"/>
						</a>

<a className="zoom-instagram-link magnific-active"  href="https://www.instagram.com/p/B-2bwrJDmGw/">
 <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/93380682_223876312054733_3103143557626182039_n-320x320.jpg" 
 style={{width: "160px", height: "150px"}}
    data-mfp-src="17843893958100087" target="_blank" rel="noopener nofollow" title="Planning"/></a>

<a className="zoom-instagram-link magnific-active"  href="https://www.instagram.com/p/B-2brFJj08I/"> 
  <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/93122701_554032245548583_5427136318538430986_n-320x320.jpg" 
style={{width: "160px", height: "150px"}}    
 data-mfp-src="17865667048741546" target="_blank" rel="noopener nofollow" title="Fashion magazine"/></a>

<a className="zoom-instagram-link magnific-active" href="https://www.instagram.com/p/B-2bmtPjQCs/">
   <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/92630779_679376292830527_470996641547303561_n-320x320.jpg" 
   style={{width: "160px", height: "150px"}}
 data-mfp-src="18101372821083732"  target="_blank" rel="noopener nofollow" title="You re dope"/>
</a>
<a className="zoom-instagram-link magnific-active"  href="https://www.instagram.com/p/B-2bgn7jn5H/">
   <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/92691988_3145795672117619_5257499169185148513_n-320x320.jpg" 
   style={{width: "160px", height: "150px"}} 
    data-mfp-src="18096032947148703" target="_blank" rel="noopener nofollow" title="Woman in this town"/>

</a>
<a className="zoom-instagram-link magnific-active"  href="https://www.instagram.com/p/B-2bdFEjh4u/">
 <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/93029502_846970729111713_1200301141260384422_n-320x320.jpg" 
style={{width: "160px", height: "150px"}} 
 data-mfp-src="18051428143229557" target="_blank" rel="noopener nofollow" title="Peace and quiet"/></a>


<a className="zoom-instagram-link magnific-active" href="https://www.instagram.com/p/B-2bX39jc-r/">
 <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/92818608_224807911961919_7778251672612952757_n-320x320.jpg" 
style={{width:" 160px", height: "150px"}}
 data-mfp-src="18050713636230710"  target="_blank" rel="noopener nofollow" title="Fashion inspiration"/>
	</a>
  <a className="zoom-instagram-link magnific-active" href="https://www.instagram.com/p/B-2bNmVD9Ok/">
  <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2021/02/93520446_247481712964924_8848713531238931647_n-320x320.jpg"
   style={{width: "160px", height: "150px"}}
    data-mfp-src="18138742912059969"  target="_blank" rel="noopener nofollow" title="Stylish"/>
								
  </a>
</div>


<div style={{display:"flex", justifyContent:"center",paddingTop:"20px"}}>
     
<a  href="http://localhost:3000/home" style={{textDecoration:"none", color:"white" ,marginRight:"20px", fontSize:"12px" ,textTransform:"uppercase", color:"pink"}}>Home</a>
<a  href="http://localhost:3000/about"  style={{textDecoration:"none", color:"white",marginRight:"20px" , fontSize:"12px",textTransform:"uppercase" , color:"pink" }}>About</a>
<a href="http://localhost:3000/shop"  style={{textDecoration:"none", color:"white" ,marginRight:"20px" , fontSize:"12px",textTransform:"uppercase", color:"pink" }}>Shop</a>
<a  href="http://localhost:3000/contac"  style={{textDecoration:"none", color:"white",marginRight:"20px" , fontSize:"12px",textTransform:"uppercase", color:"pink"  }}>Contact</a>


</div>







<div  style={{display:"flex", justifyContent:"flex-start",  paddingTop:"25px"}}>
  <div style={{paddingLeft:"60px", paddingRight:"130px"}}>
<a  href="https://www.facebook.com/ID" 
title="Facebook" rel="nofollow noopener" target="_blank" >
  <p style={{backgroundColor:"transparent",display:"inline-block", opacity:"1",float:"left",fontSize:"32px", boxShadow:"none"
  ,display:"inline-block",fontSize:"16px",padding:"0 4px",verticalAlign:"middle",backgroundRepeat:"repeat",overflow:"hidden",
cursor:"pointer",width:"32px",height:"32px",borderRadius:"999px"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
<path fill="white" d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 
0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"/></svg></p></a>
  <a  href="https://www.twitter.com/ID" 
title="Twitter" rel="nofollow noopener" target="_blank" >
  <p style={{backgroundColor:"transparent",display:"inline-block", opacity:"1",float:"left",fontSize:"32px", boxShadow:"none"
  ,display:"inline-block",fontSize:"16px",padding:"0 4px",verticalAlign:"middle",backgroundRepeat:"repeat",overflow:"hidden",
cursor:"pointer",width:"32px",height:"32px",borderRadius:"999px"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
<path fill="white" d="M20.475 7.805c.01.185.01.37.01.545a11.9 11.9 0 0 1-.493 3.362A11.73 11.73 0 0 1 8.485 20.36a11.9 11.9 0 0 1-6.467-1.902a8 8 0 0 0 1.007.061a8.45 8.45 0 0 0 5.234-1.81a4.22 4.22 0 0 1-3.938-2.92a5 5 0 0 0 .792.072a4 4 0 0 0 1.12-.154a4.2 4.2 0 0 1-3.372-3.815a1.7 1.7 0 0 1-.02-.319v-.051a4.2 4.2 0 0 0 1.912.524A4.2 4.2 0 0 1 2.88 6.54a4.3 4.3 0 0 1 .566-2.129a11.97 11.97 0 0 0 8.7
 4.412a4.219 4.219 0 0 1 7.187-3.846a8.4 8.4 0 0 0 2.684-1.028a4.98 4.98 0 0 1-1.543 3.856Z"/></svg></p></a>
  <a  href="https://www.instagram.com/ID" 
title="Instagram" rel="nofollow noopener" target="_blank" >
  <p style={{backgroundColor:"transparent",display:"inline-block", opacity:"1",float:"left",fontSize:"32px", boxShadow:"none"
  ,display:"inline-block",fontSize:"16px",padding:"0 4px",verticalAlign:"middle",backgroundRepeat:"repeat",overflow:"hidden",
cursor:"pointer",width:"32px",height:"32px",borderRadius:"999px"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024"><path fill="white" 
d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1S717.1 625.5 717.1 512S625.5 306.9 512 306.9m0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7S645.3 438.6 645.3 512S585.4 645.3 512 645.3m213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9s47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165m-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8c-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840s-183.3 4.7-235.9-16.1c-18.2-7.3-31.8-16.1-45.8-30.2c-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512s-4.7-183.3 16.1-235.9c7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9
 16.1c18.2 7.3 31.8 16.1 45.8 30.2c14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512s4.7 183.2-16.2 235.8"/></svg>
  </p></a>
  <a  href="https://www.pinterset.com/ID" 
title="Pinterest" rel="nofollow noopener" target="_blank" >
  <p style={{backgroundColor:"transparent",display:"inline-block", opacity:"1",float:"left",fontSize:"32px", boxShadow:"none"
  ,display:"inline-block",fontSize:"16px",padding:"0 4px",verticalAlign:"middle",backgroundRepeat:"repeat",overflow:"hidden",
cursor:"pointer",width:"32px",height:"32px",borderRadius:"999px"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="28" viewBox="0 0 384 512"><path fill="white" d="M204 6.5C101.4 6.5 0 74.9 0 185.6C0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4c0-9.3-23.7-29.1-23.7-67.8c0-80.4 61.2-137.4 140.4-137.4c68.1 0 118.5 38.7 118.5 109.8c0 53.1-21.3 152.7-90.3 152.7c-24.9 0-46.2-18-46.2-43.8c0-37.8 26.4-74.4 26.4-113.4c0-66.2-93.9-54.2-93.9 25.8c0 16.8 2.1 35.4 9.6 50.7c-13.8 59.4-42 147.9-42 209.1c0 18.9 2.7 37.5 4.5 56.4c3.4 3.8 1.7 3.4 6.9 1.5c50.4-69
 48.6-82.5 71.4-172.8c12.3 23.4 44.1 36 69.3 36c106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5"/></svg></p></a>
</div>
  
<div style={{display:'flex',color:"white" ,justifyContent:'center', marginLeft:"160px" , background: "transparent" ,fontSize:"10px", marginTop:"30px",marginBottom:"35px" }}>
  &copy; Beauty Center Wordpress Theme {year}</div>




</div>


    </div>
  )
}

export default Footer