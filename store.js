import { configureStore, createSlice } from '@reduxjs/toolkit'
import { cntInc, cntDec } from './store/userSlice.js'

let user = createSlice({
   name: 'user',
   initialState: 'Song',
   reducers: {
      changeName(state){   //state는 기존에 값이 들어있음. 즉, Song
         return state + 'HyunKyu'   //Song HyunKyu로 변경 됨
      }
   }
})

export let { changeName } = user.actions

export default configureStore({
   reducer: {
      user: user.reducer,
      goods: goods.reducer
   }
}) 