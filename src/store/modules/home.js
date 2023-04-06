import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const getData=createAsyncThunk("data",async ()=>{
  const res=await axios.get("http://123.207.32.32:8000/home/multidata")
  console.log(res);
  return res.data
})
const homeSlice=createSlice({
  name:"home",
  initialState:{
    banner:[],
    recommand:[]
  },
  reducers:{

  },
  extraReducers:{
    [getData.pending](state,action)
    {
      console.log("pending");
    },
    [getData.fulfilled](state,{payload})
    {
       state.banner=payload.data.banner.list
       state.recommand=payload.data.recommend.list
    },
    [getData.rejected]()
    {
     console.log("rejected");
    }
  }
})
export default homeSlice.reducer