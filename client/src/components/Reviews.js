import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactStars from "react-rating-stars-component";

function Reviews({product}) {
  //  const [rating, setrating] = useState() 
  return (
    <div>
        
<h3 style={{paddingTop:"1px"}}>Reviews</h3>
<p>There are no reviews yet.
Be the first to review “All day cream”
Your email address will not be published.</p>
<p style={{display:'flex'}}> Required fields are marked<p style={{color:"red"}}>*</p></p>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>rate
      <ReactStars
                    edit={true}
                    count={5}
                    value={product.rating}
                    size={24}
                    activeColor="#ffd700" /> 
           </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><p style={{display:'flex'}}>Your review <p style={{color:"red"}}>*</p></p>

</Form.Label>
        <Form.Control type="review" placeholder="review" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><p style={{display:'flex'}}>Name <p style={{color:"red"}}>*</p></p>

</Form.Label>
        <Form.Control type="name" placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><p style={{display:'flex'}}>Email <p style={{color:"red"}}>*</p></p>

</Form.Label>
        <Form.Control type="email" placeholder=" your email" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label=" Save my name, email, and website in this browser for the next time I comment." />
      </Form.Group>
      <Button style={{border:"none", background:"pink", width:"150px", borderRadius:"10px"}} type="submit">
        Submit
      </Button>
    </Form>



    </div>
  )
}

export default Reviews