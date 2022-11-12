import { createSlice } from '@reduxjs/toolkit'

let goods = createSlice({
   name: 'goods',
   initialState: [
      // { id: 0, name: 'White and Black', count: 2 },
      // { id: 2, name: 'Grey Yordan', count: 1 }
   ],
   reducers: {
      cntInc(state, action) {
         state.map(function (a, i) { //findIndex() 사용해도 됨
            if (state[i].id === action.payload) {
               state[i].count += 1;
            }
         })
      },
      cntDec(state, action) {
         state.map(function (a, i) {
            if (state[i].id === action.payload) {
               state[i].count -= 1;
            }
         })
      },
      add(state, action){
         let val = state.findIndex((item)=>{
            return (item.id === action.payload.id)
         })
         if(val === -1){
            state.push(action.payload);
         }
      }
   }
})
export let { cntInc, cntDec, add } = goods.actions

export default goods