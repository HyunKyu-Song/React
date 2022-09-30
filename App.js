import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '치킨 맛집';
  let [글제목, 제목변경] = useState(['치킨 맛집 추천', '햄버거 맛집 추천', '피자 맛집 추천']);
  let [좋아요갯수, 갯수변경] = useState([1, 2, 3]);
  let [modal, setModal] = useState(false);
  let [btn, setBtn] = useState('Modal open');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'coral' }}>ReactBlog</h4>
      </div>

      {
        글제목.map(function (data, i) {
          return (
            <div className='list' key={i}>
              <h4>{data}<span onClick={function(e){
                let copy = [...좋아요갯수];
                //갯수변경(copy[i]++);
                console.log(e.target);
                console.log(copy);
                갯수변경(copy[i]);
              }}> ❤ </span>{좋아요갯수[i]}
              </h4>
              <p>9월 29일 발행</p>
            </div>
          )
        })
      }

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={() => { 갯수변경(좋아요갯수 + 1) }}>❤</span> {좋아요갯수} </h4>
        <p>9월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>9월 29일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>9월 29일 발행</p>
      </div> */}

      <button onClick={() => {
        if (modal == false) {
          setModal(true);
          setBtn('Modal close');
        }
        else {
          setModal(false);
          setBtn('Modal open');
        }
      }}>{btn}</button>
      {
        modal == true ? <Modal></Modal> : null
      }

      <br></br>
      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '치킨맛집';
        제목변경(copy);
      }}>버튼</button>
      <br></br>
      <button onClick={() => {
        let asc = [...글제목];
        asc.sort();
        제목변경(asc);
      }}>가나다순</button>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
