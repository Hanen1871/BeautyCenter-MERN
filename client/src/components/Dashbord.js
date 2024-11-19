import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Servicedashbord from './Servicedashbord';
import Userdashbord from './Userdashbord';
import Reservationdashbord from './Reservationdashbord';
import { useDispatch, useSelector } from 'react-redux';
import Productdashbord from './Productdashbord';
import Commandedashbord from './Commandedashbord';
import { getservice } from '../redux/serviceSlice';
import { getreservation } from '../redux/reservationSlice';
import { getusers } from '../redux/userSlice';
import { getproduct } from '../redux/productSlice';
import { getcommande } from '../redux/commandeSlice';

function Dashbord({ping,setping}) {
  const [category, setcategory] = useState("users");
  const service = useSelector((state) => state.services.serviceslist);
  const reservations=useSelector((state)=>state.reservations?.reservationslist);
  const product = useSelector((state) => state.product.productlist);
  const commandes=useSelector((state)=>state.commande?.commandeslist);
  const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getservice());
    dispatch(getreservation());
    dispatch(getusers());
    dispatch(getproduct());
    dispatch(getcommande());
}, [])
const [text, settext] = useState("")
const users = useSelector((state) => state.user.userlist); // Si 'users' est dans le state

 return (

<div className='boddd'>
<div className='headerrr'> 
<header>

  <div className='menuicon1'>
  <label > <input type="text" placeholder='search for ..'  onChange={(e)=>settext(e.target.value)}/></label>
<div >
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='menu-icon'><path fill="#8b8484" d="M9.042 19.003h5.916a3 3 
0 0 1-5.916 0m2.958-17a7.5 7.5 0 0 1 7.5 7.5v4l1.418 3.16A.95.95 0 0 1 20.052 18h-16.1a.95.95 0 0 1-.867-1.338l1.415-3.16V9.49l.005-.25A7.5 7.5 0 0 1 12 2.004"/></svg>
    </div>
 <div >
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='icon'><path fill="#8b8484" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 
6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
    </div>
<div>
 <a href='https://mail.yahoo.com/d/folders/6?guce_referrer=aHR0cHM6Ly9sb2dpbi55YWhvby5jb20v&guce_referrer_sig=AQAAAJC6afEsA_KGIAjxVzIhZEXFyC1c7fbgp9rJxwa22KmcM_-PsEpp8zCoOvcxV1N0T4z328QdOMWjjw-YTYu-XTmRuMMBA5y0AxIhChtwBDEhssVZ7gsz3zj0JxAoxX5FEi2r5N4xUIbrB41si3dCf43eETvrtJJFTqavhHiUr-Xs'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='icon'><g fill="none" stroke="#8b8484" 
stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"><path stroke-dasharray="64" stroke-dashoffset="64" 
d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze"
 attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path><path stroke-dasharray="24"
 stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"/></path></g></svg>
</a>
</div>
</div>
</header>
</div>
<div className='gridcontainer'>
<div className='sidebarr'>
<div className='sidebarrtitle'>
<div className='sidebarrbrand'>

 <div style={{backgroundColor:"rgb(34,48,67)", paddingBottom:"30px", marginLeft:"8px", marginRight:"10px"}} >
 <div className='iconheaderr' style={{display:"flex", justifyContent:"space-around",alignItems:"center", backgroundColor:"rgb(103,103,119)"}} >
  <img src='beautiful-female-face-portrait-beauty-salon-vector-18729642-removebg-preview (1).png' style={{width:"50px",height:"50px" }}/>
 <h3 style={{fontSize: "18px" , color:"white", fontWeight:"bold", fontFamily:"cursive"}}> Beauty center</h3>
 </div> 


 <div style={{display:"flex", justifyContent:"space-around", padding:"20px" ,color:"white",marginLeft:"-30px",fontSize :"20px", fontWeight:"bold",alignItems:"center"}}>
 <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#8b8484" 
 d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m4.596 5.404a.596.596 0 0 0-.763-.067q-4.334
  3.043-4.894 3.602a1.5 1.5 0 0 0 2.122 2.122q.328-.329 3.598-4.897a.59.59 0 0 0-.063-.76M17.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-11 0a1 1 0 1 0 0 2a1 1 0 
 0 0 0-2m2.318-3.596a1 1 0 1 0-1.414 1.414a1 1 0 0 0 1.414-1.414M12 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></svg>Dashbord
 </div>
</div>
<div className='sidebarrlist' >

<ul>
<div classeName='sidebarritem'> 
  
 <li>
 <button className='iconn' onClick={() =>setcategory("services")}  style={{display:"inline-bloc",justifyContent:"space-evenly" ,marginLeft:"-42px", alignItems:"center",paddingTop:"8px", paddingBottom:"8px"}} >

 <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><circle cx="9.379" cy="9.379" r="3.879" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.379" cy="38.621" r="3.879" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.379" cy="24" r="3.879" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round"/><rect width="25.064" height="7.758" x="17.436" y="5.5" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"/><rect width="25.064" height="7.758" x="17.436" y="34.742" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"/>
 <rect width="25.064" height="7.758" x="17.436" y="20.121" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"/>
 </svg> <h3 style={{fontSize:"15px", fontWeight:"bold"}}>Services </h3></button>
 </li>  </div>
 <div  classeName='sidebarritem'>
 <li>
 <button className='iconn'  onClick={()=>setcategory("users")} style={{justifyContent:"space-evenly" ,marginLeft:"-42px", alignItems:"center",paddingTop:"8px", paddingBottom:"8px"}} > 


<svg  xmlns="http://www.w3.org/2000/svg" width="35" height="28" viewBox="0 0 640 512"><path fill="#8b8484" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64m32 32h-64c-17.6 0-33.5 7.1-45.1 18.6c40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64m-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32S208 82.1 208 144s50.1 112 112 112m76.8 32h-8.3c
-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6
-51.6-115.2-115.2-115.2m-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4"/>
</svg> <h3 style={{fontSize:"15px", fontWeight:"bold"}}>Users</h3> </button> 
 </li> </div> 
<div  classeName='sidebarritem'>
 <li >
<button className='iconn'   onClick={()=>setcategory("reservations")} style={{justifyContent:"space-between" ,marginLeft:"-24px", alignItems:"center",paddingTop:"8px", paddingBottom:"8px"}} >
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 2048 2048"><path fill="#8b8484" d="M896 512v128H512V512zM512 896V768h384v128zm0 256v-128h256v128zM384 512v128H256V512zm0 256v128H256V768zm-128 384v-128h128v128zM128 128v1792h640v128H0V0h1115l549
 549v219h-128V640h-512V128zm1024 91v293h293zm640 805h256v1024H896V1024h256V896h128v128h384V896h128zm128 896v-512h-896v512zm0-640v-128h-896v128z"/>
 </svg><h3 style={{fontSize:"15px", fontWeight:"bold"}}>Reservations</h3></button> 
 </li> </div>
 <div  classeName='sidebarritem'>
 <li > <button className='iconn'  onClick={()=>setcategory("product")} style={{justifyContent:"space-evenly" ,marginLeft:"-42px", alignItems:"center",paddingTop:"8px", paddingBottom:"8px"}} >

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#8b8484" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9H3V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1m8-17h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9h-4V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1
 1m8-17h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9h-4V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1"/>
 </svg><h3 style={{fontSize:"15px", fontWeight:"bold"}}>Products</h3></button> 
</li>

</div> 
<div  classeName='sidebarritem'>


 <li > 
  <button className='iconn'  onClick={()=>setcategory("commande")} style={{justifyContent:"space-evenly" ,marginLeft:"-34px", alignItems:"center",paddingTop:"8px", paddingBottom:"8px"}} >

<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#8b8484" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9H3V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1m8-17h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9h-4V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1
 1m8-17h-4a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-2 19a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9h-4V3h4Zm-1 7a1 1 0 1 1-1-1a1 1 0 0 1 1 1"/>
 </svg><h3 style={{fontSize:"15px", fontWeight:"bold"}}>Commandes</h3></button> 
</li>
</div> 

</ul>
</div>
</div>
</div>
</div>
 <main className='containerrr'>
  
 <div style={{display:"flex", justifyContent:"space-between", paddingTop:"25px", paddingLeft:"30px"}}>
 {/* <div className='carddd'> */}
 <div style={{display:"flex"}}>
     <svg xmlns="http://www.w3.org/2000/svg" width="35.64" 
     height="28" viewBox="0 0 1792 1408"><path fill="#8b8484" d="M384 896q0-53-37.5-90.5T256 768t-90.5 37.5T128 896t37.5 90.5T256 1024t90.5-37.5T384
      896m192-448q0-53-37.5-90.5T448 320t-90.5 37.5T320 448t37.5 90.5T448 576t90.5-37.5T576 448m428 481l101-382q6-26-7.5-48.5T1059 469t-48 6.5t-30 39.5L880
       897q-60 5-107 43.5t-63 98.5q-20 77 20 146t117 89t146-20t89-117q16-60-6-117t-72-91m660-33q0-53-37.5-90.5T1536 768t-90.5 37.5T1408 896t37.5 90.5t90.5
        37.5t90.5-37.5T1664 896m-640-640q0-53-37.5-90.5T896 128t-90.5 37.5T768 256t37.5 90.5T896 384t90.5-37.5T1024 256m448 192q0-53-37.5-90.5T1344 320t-90.5
         37.5T1216 448t37.5 90.5T1344 576t90.5-37.5T1472 448m320 448q0
      261-141 483q-19 29-54 29H195q-35 0-54-29Q0 1158 0 896q0-182 71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348"/></svg>
       <h3 style={{fontSize:"15px", fontFamily:"sans-serif",marginLeft:"8px"}}> Dashbord 
     </h3></div><img   src="th-fotor-202411069498.png" style={{height:"60px", width:"60px", marginRight:"20px"}} />
 </div>
<div className='siddd' >
 <div className='carddd'>
 <div style={{display:"flex", flexWrap:"wrap"}}>
  <div style={{display:"flex", justifyContent:"space-between", flexWrap:"nowrap"}}>
<svg  xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 1920 1792"><path fill="#8b8484" d="M593 896q-162 5-265 
  128H194q-82 0-138-40.5T0 865q0-353 124-353q6 0 43.5 21t97.5 42.5T384 597q67 0 133-23q-5 37-5 66q0 139 81 256m1071 637q0 120-73 189.5t-194 69.5H523q-121
   0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5t62-81t85.5-53.5T602 960q10 0 43 21.5t73 48t107 48t135 21.5t135-21.5t107-48t73-48t43-21.5q61 0 111.5 20t85.5 
   53.5t62 81t43 97.5t26.5 108.5t14 109t3.5 103.5M640 256q0 106-75 181t-181 75t-181-75t-75-181t75-181T384 0t181 75t75 181m704 384q0 159-112.5 271.5T960 1024T688.5 911.5T576
640t112.5-271.5T960 256t271.5 112.5T1344 640m576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128q81-117 81-256q0-29-5-66q66 23 133 23q59 0 119-21.5t97.5-42.5t43.5-21q124
   0 124 353m-128-609q0 106-75 181t-181 75t-181-75t-75-181t75-181t181-75t181 75t75 181"/></svg>
<h3 style={{fontSize:"15px", fontFamily:"sans-serif", marginLeft:"35px"}}>Users</h3></div>
 <h1 style={{fontSize:"15px", fontFamily:"sans-serif", marginRight:"5px", marginTop:"15px"}}>{users?.length}</h1>
 </div>
 </div>
<div className='carddd'>
  <div style={{display:"flex", flexWrap:"wrap"}}>
  <div style={{display:"flex", justifyContent:"space-between", flexWrap:"nowrap"}}>
<svg   xmlns="http://www.w3.org/2000/svg" width="35.64" height="28" viewBox="0 0 1792 1408"><path fill="#8b8484" d="M1024 1280h640v-128h-640zM640 
768h1024V640H640zm640-512h384V128h-384zm512 832v256q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 
19H64q-26 0-45-19T0 832V576q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 19H64q-26 0-45-19T0 320V64q0-26 19-45T64 0h1664q26 0 45 19t19 45"/></svg>
<h3 style={{fontSize:"15px", fontFamily:"sans-serif", marginLeft:"35px"}}>Products</h3></div>
<h1 style={{fontSize:"15px", fontFamily:"sans-serif", marginRight:"5px", marginTop:"15px"}}>{product?.length}</h1>
 </div></div>
 <div className='carddd'>
 <div style={{display:"flex", flexWrap:"wrap"}}>
  <div style={{display:"flex", justifyContent:"space-between", flexWrap:"nowrap"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 2048 2048"><path fill="#8b8484" d="M896 512v128H512V512zM512 896V768h384v128zm0 256v-128h256v128zM384 512v128H256V512zm0 256v128H256V768zm-128 384v-128h128v128zM128 128v1792h640v128H0V0h1115l549
 549v219h-128V640h-512V128zm1024 91v293h293zm640 805h256v1024H896V1024h256V896h128v128h384V896h128zm128 896v-512h-896v512zm0-640v-128h-896v128z"/>
 </svg>
<h3 style={{fontSize:"15px", fontFamily:"sans-serif", marginLeft:"35px"}}>Reservations</h3></div>
<h1 style={{fontSize:"15px", fontFamily:"sans-serif", marginRight:"5px", marginTop:"15px"}}>{reservations?.length}</h1>
 </div>
 </div>
 <div className='carddd'> 
 <div style={{display:"flex", flexWrap:"wrap"}}>
  <div style={{display:"flex", justifyContent:"space-between", flexWrap:"nowrap"}}>
  <svg  xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><circle cx="9.379" cy="9.379" r="3.879" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.379" cy="38.621" r="3.879" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.379" cy="24" r="3.879" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round"/><rect width="25.064" height="7.758" x="17.436" y="5.5" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"/><rect width="25.064" height="7.758" x="17.436" y="34.742" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"/>
 <rect width="25.064" height="7.758" x="17.436" y="20.121" fill="none" stroke="#8b8484" stroke-linecap="round" stroke-linejoin="round" rx="1.79" ry="1.79"/>
 </svg>
<h3 style={{fontSize:"15px", fontFamily:"sans-serif", marginLeft:"35px"}}>Services</h3></div>
<h1 style={{fontSize:"15px", fontFamily:"sans-serif", marginRight:"5px", marginTop:"15px"}}>{service?.length}</h1>
</div>
</div>

 <div className='carddd'> 
 <div style={{display:"flex", flexWrap:"wrap"}}>
  <div style={{display:"flex", justifyContent:"space-between", flexWrap:"nowrap"}}>
 <svg xmlns="http://www.w3.org/2000/svg" width="35.64" height="28" viewBox="0 0 1792 1408"><path fill="#8b8484" d="M1024 1280h640v-128h-640zM640 
768h1024V640H640zm640-512h384V128h-384zm512 832v256q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 
19H64q-26 0-45-19T0 832V576q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 19H64q-26 0-45-19T0 320V64q0-26 19-45T64 0h1664q26 0 45 19t19 45"/></svg>
<h3 style={{fontSize:"15px", fontFamily:"sans-serif", marginLeft:"35px"}}>Commandes</h3></div>
<h1 style={{fontSize:"15px", fontFamily:"sans-serif", marginRight:"5px", marginTop:"15px"}}>{commandes?.length}</h1>
  </div>
  </div>
  </div>

 <div className='charts'>
{category=="services"?      <div>
 <Servicedashbord ping={ping} setping={setping} text={text}/>
</div>:
category=="reservations"? <div>
 <Reservationdashbord ping={ping} setping={setping} text={text}/>
</div>:
 category=="product"? <div>
  <Productdashbord ping={ping} setping={setping} text={text}/> 
</div>:
 category=="commande"? <div >
<Commandedashbord ping={ping} setping={setping} text={text}/> 
</div>:
<div>
<Userdashbord ping={ping} setping={setping} text={text}/>  

</div>
}
</div>   
      
 

 </main>

</div>
</div>

  )
}




export default Dashbord