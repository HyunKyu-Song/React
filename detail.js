import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Alert } from 'react-bootstrap';


// let CoralBtn = styled.button`
//    background : ${props => props.bg};
//    color : black;
//    padding : 10px;
// `;

// let Box = styled.div`
//    background : grey;
//    padding : 30px;
//    height : 100px;
// `

function Detail(props) {

   let [cnt, cntSet] = useState(0);
   let [alert, alertSet] = useState(true);
   let [danger, dangerSet] = useState(false);
   let { id } = useParams();
   let [val, valSet] = useState('');

   useEffect(() => {
      //mount, update시 여기 코드 실행됨
      let timer = setTimeout(() => {
         alertSet(false);
      }, 2000)
      console.log(`val = ${val}`);

      if (isNaN(val) === true) {
         dangerSet(true);
      }
      else{
         dangerSet(false);
      }
      
      return () => { clearTimeout(timer) }
   },[val])

   return (
      <div className="container">
         <div className="row">
            {
               alert == true ?
                  <Alert variant='warning'>
                     2초 이내 구매시 할인
                  </Alert> : null
            }
            {
               danger == true ?
                  <Alert variant='danger'>
                     입력값이 숫자가 아닙니다!
                  </Alert> : null
            }
            <button onClick={() => { cntSet(cnt + 1) }}>cnt {cnt}</button>
            <input onChange={(e) => { valSet(e.target.value) } }></input>
            {/* <Box>
               <CoralBtn bg='coral'>버튼</CoralBtn>
            </Box> */}
            <div className="col-md-6">
               <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} style={{ width: '80%' }}></img>
            </div>
            <div className="col-md-6">
               <h4 className="pt-5">{props.shoes[id].title}</h4>
               <p>{props.shoes[id].content}</p>
               <p>{props.shoes[id].price}</p>
               <button className="btn btn-danger">주문하기</button>
            </div>
         </div>
      </div>
   )
}

export default Detail;