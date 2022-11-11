import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store.js';
import { cntInc, cntDec, nameSort } from '../store/userSlice.js';

function Cart() {
   let state = useSelector((state) => { return state })
   let dispatch = useDispatch()
   console.log(state.user)
   return (
      <div>
         <div>
            {state.user}의 장바구니
            <button onClick={() => {
               dispatch(nameSort());
            }}> 이름순</button>
         </div>

         <Table striped bordered hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>변경하기</th>
               </tr>
            </thead>
            <tbody>
               {
                  state.goods.map(function (a, i) {
                     return (
                        <tr key={i}>
                           <td>{state.goods[i].id}</td>
                           <td>{state.goods[i].name}</td>
                           <td>{state.goods[i].count}</td>
                           <td><button onClick={() => {
                              console.log(i);
                              console.log(state.goods[i].id);
                              if (i === state.goods[i].id) {
                                 dispatch(cntInc(i))
                              }
                           }}>+</button> <button onClick={() => {
                              dispatch(cntDec(i))
                           }}>-</button></td>
                        </tr>
                     )
                  })
               }
            </tbody>
         </Table>
      </div>
   )
}

export default Cart