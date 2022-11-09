import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col, Alert } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios';
import Cart from './routes/Cart.js';


function App() {

  let [shoes, shoesSet] = useState(data);
  let navigate = useNavigate();
  let [cnt, cntSet] = useState(2);
  let [danger, dangerSet] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className='link' to="/">아이돌 굿즈샵</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={() => { navigate('/detail') }}>상세페이지</Nav.Link> */}
            <Nav.Link onClick={() => { navigate('/fromis') }}>프로미스나인</Nav.Link>
            <Nav.Link onClick={() => { navigate('/lesserafim') }}>르세라핌</Nav.Link>
            <Nav.Link onClick={() => { navigate('/ive') }}>아이브</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>

            <Container>
              <Row>
                {
                  shoes.map(function (i, j) {
                    return (
                      <Goods shoes={shoes[j]}></Goods>
                    )
                  })
                }
              </Row>
            </Container>

            {
              danger == true ?
                <Alert variant='danger'>
                  더이상 상품이 없습니다.
                </Alert> : null
            }

            <button onClick={() => {
              let copy = [...shoes];
              copy = copy.sort((a, b) => {
                if (a.title > b.title)
                  return 1;
                if (a.title < b.title)
                  return -1;
                return 0;
              });
              shoesSet(copy);
            }}>가나다순</button><br></br>
            <button onClick={() => {
              cntSet(cnt + 1);
              if (cnt == 4) {
                dangerSet(true);
              }
              else if (cnt == 5) {
                dangerSet(false);
                cntSet(4);
              }
              else {
                axios.get(`https://codingapple1.github.io/shop/data${cnt}.json`)
                  .then((result) => {
                    console.log(result.data);
                    console.log(cnt);
                    let copy = [...shoes, ...result.data];
                    shoesSet(copy);
                  })
                  .catch(() => {
                    console.log('실패함');
                  })
              }
            }}>더보기</button>
          </>
        } />
        {/* <Route path="/detail" element={<Detail shoes={shoes}></Detail>} /> */}
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/fromis" element={<div>프로미스나인</div>} />
        <Route path="/lesserafim" element={<div>르세라핌</div>} />
        <Route path="/ive" element={<div>아이브</div>} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />
        <Route path='/cart' element={<Cart></Cart>} />

        {/* <Route path="/idol" element={<div>아이돌 <Outlet></Outlet></div>} >
          <Route path="fromis" element={<div>프로미스나인</div>} />
          <Route path="lesserafim" element={<div>르세라핌</div>} />
          <Route path="ive" element={<div>아이브</div>} />
        </Route> */}

      </Routes>

    </div >
  );
}

function Goods(props) {
  return (
    <Col>
      <Link to={`/detail/${props.shoes.id}`}>
        <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id + 1}.jpg`} style={{ width: '80%' }}></img>
      </Link>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;