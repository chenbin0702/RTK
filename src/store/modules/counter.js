import {createSlice} from '@reduxjs/toolkit';
const counterSlice=createSlice({
  name:'counter',
  initialState:{
    counter:1222
  },
  reducers:{
    addNumber(state,action)
    {
      state.counter+=action.payload
    },
    subNumber(state,action)
    {
      state.counter-=action.payload
    }

  }
})
export const {addNumber,subNumber}=counterSlice.actions
export default counterSlice.reducer