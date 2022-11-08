import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
   name : 'user',
   initialState : 'Song'
})

let stack = createSlice({
   name : 'stack',
   initialState : [10, 11, 12]
})

export default configureStore({
   reducer: {
      user : user.reducer,
      stack : stack.reducer
   }
}) 