import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3h4jber', 'template_eawou0d', form.current, {
        publicKey: 'wrj7q4kVpwr925FLt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div style={{borderStyle:"ridge",display:"flex",flexWrap:"nowrap",  background:"white",margin:"40px 50px 60px 150px"}}>
   
  <div style={{fontFamily:"Dancing Script", display:"flex", flexWrap:"wrap"}}>
<p style={{fontFamily:"sans-serif", fontSize:"13px", margin:"57px 150px 0px 74px",color:"gray", textAlign:"justify",width:"70%"}}>
If you would like to find out more about how we can help you,
 please give us a  drop us an email
 welcome your comments and messgaes below.and we will be 
  glad to have you as a new client.<p style={{fontWeight:"bold", fontSize:"13px",color:"black"}}>Beauty has a purpose, and purpose is you !</p></p>
  <div style={{background:"#dcd7d9", display:"flex", flexWrap:"wrap", margin:"0px 78px 20px 44px"}}>
<form ref={form} onSubmit={sendEmail} style={{background:"#dcd7d9", display:"flex", flexWrap:"wrap",padding:"50px 70px 37px 70px"}}>
      <label style={{marginRight:"3px",alignItems:"center"}}><p style={{display:"flex",marginBottom:"0rem", marginTop:"0rem"}}>Name<p style={{color:"red"}}>*</p></p></label>
      <input style={{marginRight:"3px", alignItems:"center",width:"250px", height:"30px"}} type="text" name="user_name" />
      <label style={{marginRight:"3px", alignItems:"center"}}><p style={{display:"flex",marginBottom:"0rem", marginTop:"0rem"}}>Email<p style={{color:"red"}}>*</p></p></label>
      <input style={{marginRight:"3px", alignItems:"center",width:"250px", height:"30px"}} type="text" name="user_email" />
      <label style={{marginRight:"2px", alignItems:"center"}}><p style={{display:"flex",marginBottom:"0rem", marginTop:"0rem"}}>Phone<p style={{color:"red"}}>*</p></p></label>
      <input style={{marginRight:"3px", alignItems:"center",width:"250px", height:"30px"}} type="text" name="user_phone" />
      <label ><p style={{display:"flex",marginBottom:"0rem", marginTop:"0rem"}}>Message<p style={{color:"red", marginRight:"1px"}}>*</p></p></label>
      <textarea style={{marginRight:"27px", alignItems:"center",width:"240px", height:"50px"}} name="message"  />
      <button style={{border:"none", background:"transparent"}} onClick={()=>Swal.fire({
  title: "message are send!",
  text: "You clicked the button!",
  icon: "success"})}>
  <input style={{border:"none", background:"#737373", borderRadius:"10px", marginTop:"10px", width:"100px"}} type="submit" value="Submit"  
 /></button>


</form></div></div>
<div style={{display:"flex",flexWrap:"wrap"}}>
 
 
 <div style={{display:"flex", flexDirection:"column", justifyContent:"right" }} > 
 
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6755378613425!2d10.107422575552425!3d33.87225187322525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556fc41597702f%3A0xaf7eb7a2b7b76f03!2sGOMYCODE%20Gab%C3%A8s!5e0!3m2!1sfr!2stn!4v1728997605046!5m2!1sfr!2stn" width="400" height="450" style={{border:"0",  margin:"40px 20px 1px 1px"}} allowfullscreen="" loading="lazy"
   referrerpolicy="no-referrer-when-downgrade"></iframe>
  

  </div>
  <div style={{display:"flex", alignItems:"center", padding:"5px", borderRadius:"30px",marginLeft:"18px"}}>
 <a href="https://www.instagram.com/" >
  
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256">
  <g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/>
  <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/>
  <stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/>
  <stop offset="1" stop-color="#60f" stop-opacity="0"/>
  </radialGradient></defs></g></svg>
  Instagram</a>
  <a href="https://www.facebook.com/people/Han-En/100008190094293/" style={{display:"flex", flexWrap:"wrap", padding:"15px"}}> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
  Facebook</a>
  <a href="https://www.linkedin.com/home/?originalSubdomain=fr" style={{display:"flex", flexWrap:"wrap", padding:"15px"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256">
  <path fill="#0a66c2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"/></svg>
  LinkedIn</a>
  </div>

  </div>
</div>  
 


  )
}

export default Contact