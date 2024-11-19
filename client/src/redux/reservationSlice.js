import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getreservation=createAsyncThunk("reservations/get", async()=>{
    try {
        let result=await axios.get("http://localhost:5000/reservation");
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const addreservation=createAsyncThunk("reservations/add", async(newreservations)=>{
    try {
        let result=await axios.post("http://localhost:5000/reservation/add", newreservations);
        return result 
    } catch (error) {
        console.log(error)
    }})
export const deletereservation=createAsyncThunk("reservations/delete", async(id)=>{
    try {
        let result=await axios.delete(`http://localhost:5000/reservation/${id}`);
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const updatereservation=createAsyncThunk("reservations/update", async({id, edited})=>{
    try {
        let result=await axios.put(`http://localhost:5000/reservation/${id}`, edited);
        return result 
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
  reservationslist: null,
  status:null
}

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    updatereservation: (state, action) => {
      let i =state.reservationslist.findIndex((el)=>el.id===action.payload.id);
      state.reservationslist[i]=action.payload.edited
     },
 },



// Action creators are generated for each case reducer function 
  extraReducers: (builder) => {
    builder
      .addCase(getreservation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getreservation.fulfilled, (state, action) => {
        state.status = "success";
        state.reservationslist = action.payload.data.reservation;
      })
      .addCase(getreservation.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addreservation.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addreservation.fulfilled, (state, action) => {
        state.status = "success";
      
      })
      .addCase(addreservation.rejected, (state) => {
        state.status = "fail";
      })
 
  
  .addCase(deletereservation.pending, (state) => {
    state.status = "pending";
  })
  .addCase(deletereservation.fulfilled, (state, action) => {
    state.status = "success";
  
  })
  .addCase(deletereservation.rejected, (state) => {
    state.status = "fail";
  })

  .addCase(updatereservation.pending, (state) => {
    state.status = "pending";
  })
  .addCase(updatereservation.fulfilled, (state, action) => {
    state.status = "success";
  
  })
  .addCase(updatereservation.rejected, (state) => {
    state.status = "fail";
  });

}

})

// Action creators are generated for each case reducer function
export const {editreservation} = reservationSlice.actions;


export default reservationSlice.reducer