import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfo: (state,action) => {
    console.log(state.value);
    console.log(action.payload);
    state.value = action.payload
    
    },
  },
})
export const {userInfo} = userSlice.actions

export default userSlice.reducer