import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [아이돌, 팀명변경] = useState(['프로미스나인', '르세라핌', '아이브']);
  let [좋아요, 좋아요변경] = useState(0);
  let [모달, 모달변경] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'coral' }}>아이돌 Blog</h4>
      </div>
      <div className='list'>
        <h4>{아이돌[0]} <span onClick={() => {
          좋아요변경(좋아요 + 1);
        }}>❤</span> {좋아요} </h4>
        <p>10월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{아이돌[1]}</h4>
        <p>10월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{아이돌[2]}</h4>
        <p>10월 18일 발행</p>
      </div>

      <button onClick={() => {
        let copy = [...아이돌];
        copy[0] = 'fromis_9';
        팀명변경(copy);
      }}>버튼</button>
      <br/>

      <button onClick={() => {
        let copy = [...아이돌];
        팀명변경(copy.sort());
      }}>오름차순</button>
      <br/>

      <button onClick={() => {
        모달변경(!모달);
      }}>Modal</button>

      { 모달 == true ? <Modal></Modal> : null }

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
