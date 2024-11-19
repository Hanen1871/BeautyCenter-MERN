import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
export const getcommande=createAsyncThunk("commandes/get", async()=>{
    try {
        let result=await axios.get("http://localhost:5000/commande");
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const addcommande=createAsyncThunk("commandes/add", async(newcommandes)=>{
    try {
        let result=await axios.post("http://localhost:5000/commande/add", newcommandes);
        return result 
    } catch (error) {
        console.log(error)
    }})
export const deletecommande=createAsyncThunk("commandes/delete", async(id)=>{
    try {
        let result=await axios.delete(`http://localhost:5000/commande/${id}`);
        return result 
    } catch (error) {
        console.log(error)
    }
})
export const updatecommande=createAsyncThunk("commandes/update", async({id, edited})=>{
    try {
        let result=await axios.put(`http://localhost:5000/commande/${id}`, edited);
        return result 
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
  commandeslist: null,
  status:null
}

export const commandeSlice = createSlice({
  name: 'commande',
  initialState,
  reducers: {
 
 },



// Action creators are generated for each case reducer function 
  extraReducers: (builder) => {
    builder
      .addCase(getcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getcommande.fulfilled, (state, action) => {
        state.status = "success";
        state.commandeslist = action.payload.data.commande;
      })
      .addCase(getcommande.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(addcommande.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addcommande.fulfilled, (state, action) => {
        state.status = "success";
      
      })
      .addCase(addcommande.rejected, (state) => {
        state.status = "fail";
      })
 
  
  .addCase(deletecommande.pending, (state) => {
    state.status = "pending";
  })
  .addCase(deletecommande.fulfilled, (state, action) => {
    state.status = "success";
  
  })
  .addCase(deletecommande.rejected, (state) => {
    state.status = "fail";
  })

  .addCase(updatecommande.pending, (state) => {
    state.status = "pending";
  })
  .addCase(updatecommande.fulfilled, (state, action) => {
    state.status = "success";
  
  })
  .addCase(updatecommande.rejected, (state) => {
    state.status = "fail";
  });

}

})

// Action creators are generated for each case reducer function
export const {editcommande} = commandeSlice.actions;


export default commandeSlice.reducer