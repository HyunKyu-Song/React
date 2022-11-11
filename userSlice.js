import { createSlice } from '@reduxjs/toolkit'

let goods = createSlice({
   name: 'goods',
   initialState: [
      { id: 0, name: 'White and Black', count: 2 },
      { id: 2, name: 'Grey Yordan', count: 1 }
   ],
   reducers: {
      cntInc(state, i){
         state[i.payload].count += 1;
      },
      cntDec(state, i){
         state[i.payload].count -= 1;
      },
      nameSort(state){
         state.map(function(a, i){
            let copy = [...state];
            copy = copy[i].name;
            state = copy.sort();
         })
      }
   }
})
export let { cntInc, cntDec, nameSort } = goods.actions

export default goods