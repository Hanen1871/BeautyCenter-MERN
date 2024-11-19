import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response =await axios.post(
      "http://localhost:5000/user/register", 
      user);
return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response =await axios.post(
      "http://localhost:5000/user/login", 
      user);
return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const deleteuser=createAsyncThunk("user/delete", async(id)=>{
  try {
      let result=await axios.delete(`http://localhost:5000/user/${id}`);
      return result 
  } catch (error) {
      console.log(error)
  }
})
export const updateuser=createAsyncThunk("user/update", async({id, edited})=>{
  try {
      let result=await axios.put(`http://localhost:5000/user/${id}`, edited);
      return result 
  } catch (error) {
      console.log(error)
  }
})
export const getusers=createAsyncThunk("users/get", async()=>{
  try {
      let result=await axios.get("http://localhost:5000/user/");
      return result 
  } catch (error) {
      console.log(error)
  }
})
















const initialState = {
  user: null,
 status: null,
 userlist:null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },


 




  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.status ="success";
        state.user = action.payload.data.newUserToken;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userRegister.rejected, (state) => {
        state.status = "fail";
      })

      .addCase(userLogin.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status ="success";
        state.user = action.payload.data.user;
        localStorage.setItem("token", action.payload.data.token);
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(userCurrent.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userCurrent.fulfilled, (state, action) => {
        state.status ="success";
        state.user = action.payload?.data.user;
      })
      .addCase(userCurrent.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(updateuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateuser.fulfilled, (state, action) => {
        state.status ="success";
        state.user = action.payload?.data.user;
      })
      .addCase(updateuser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(deleteuser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.status ="success";
        state.user = action.payload?.data.user;
      })
      .addCase(deleteuser.rejected, (state) => {
        state.status = "fail";
      })
      .addCase(getusers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getusers.fulfilled, (state, action) => {
        state.status ="success";
        state.userlist = action.payload?.data.users;
      })
      .addCase(getusers.rejected, (state) => {
        state.status = "fail";
      })


  },
})

export const { logout} = userSlice.actions;

export default userSlice.reducer;