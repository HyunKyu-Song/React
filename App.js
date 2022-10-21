//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [아이돌, 팀명변경] = useState(['프로미스나인', '르세라핌', '아이브']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [모달, 모달변경] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let year = new Date().getFullYear(); // 년도
  let month = new Date().getMonth() + 1;  // 월
  let date = new Date().getDate();  // 날짜

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{ color: 'coral' }}>아이돌 Blog</h4>
      </div>

      {
        아이돌.map(function (i, j) {
          return (
            <div className='list' key={i}>
              <h4 onClick={() => {
                모달변경(!모달);
                setTitle(j);
              }}>{i} <span onClick={(e) => {
                e.stopPropagation();
                let copy = [...좋아요];
                copy[j] += 1;
                좋아요변경(copy);
              }}>❤</span> {좋아요[j]} <button onClick={(e) => {
                e.stopPropagation();
                let copy = [...아이돌];
                copy.splice(j, 1);
                팀명변경(copy);
              }}>삭제</button> </h4>
              <p>{`${year}.${month}.${date}`}</p>
            </div>
          )
        })
      }

      <button onClick={() => {
        let copy = [...아이돌];
        copy[0] = 'fromis_9';
        팀명변경(copy);
      }}>버튼</button>
      <br />

      <button onClick={() => {
        let copy = [...아이돌];
        팀명변경(copy.sort());
      }}>오름차순</button>
      <br />

      <button onClick={() => {
        모달변경(!모달);
      }}>Modal</button>

      {모달 === true ? <Modal color="coral" title={title} 아이돌={아이돌} 팀명변경={팀명변경}></Modal> : null}
      <br />

      <input onChange={(e) => {
        입력값변경(e.target.value);
        console.log(입력값);
      }}></input>
      <button onClick={() => {
        if (입력값 !== '') {
          let copy = [...아이돌];
          copy.push(입력값);
          팀명변경(copy);
          let copy2 = [...좋아요];
          copy2.push(0);
          좋아요변경(copy2);
        }
      }}>버튼</button>

    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.아이돌[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.아이돌];
        copy[0] = 'fromis_9';
        props.팀명변경(copy);
      }}>버튼</button>
    </div>
  )
}


export default App;
