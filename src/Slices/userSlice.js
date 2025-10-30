import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state) => {
    console.log(state);
    
    },
  },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer