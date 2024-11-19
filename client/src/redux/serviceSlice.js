import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getservice=createAsyncThunk("services/get", async()=>{
    try {
        let result=await axios.get("http://localhost:5000/services");
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const addservice=createAsyncThunk("services/add", async(newservices)=>{
    try {
        let result=await axios.post("http://localhost:5000/services/add", newservices);
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const deleteservice=createAsyncThunk("services/delete", async(id)=>{
    try {
        let result=await axios.delete(`http://localhost:5000/services/${id}`);
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const updateservice=createAsyncThunk("services/update", async({id, edited})=>{
    try {
        let result=await axios.put(`http://localhost:5000/services/${id}`, edited);
        return result 
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
  serviceslist: null,
  status:null
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getservice.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getservice.fulfilled, (state, action) => {
        state.status = "success";
        state.serviceslist = action.payload.data.services;
      })
      .addCase(getservice.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addservice.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addservice.fulfilled, (state, action) => {
        state.status = "success";
      
      })
      .addCase(addservice.rejected, (state) => {
        state.status = "fail";
      })
 
  
  .addCase(deleteservice.pending, (state) => {
    state.status = "pending";
  })
  .addCase(deleteservice.fulfilled, (state, action) => {
    state.status = "success";
  
  })
  .addCase(deleteservice.rejected, (state) => {
    state.status = "fail";
  })

  .addCase(updateservice.pending, (state) => {
    state.status = "pending";
  })
  .addCase(updateservice.fulfilled, (state, action) => {
    state.status = "success";
  
  })
  .addCase(updateservice.rejected, (state) => {
    state.status = "fail";
  });

},






  }
)

// Action creators are generated for each case reducer function


export default servicesSlice.reducer