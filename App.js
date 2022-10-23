import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './detail.js';

function App() {

  let [shoes, shoesSet] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className='link' to="/">아이돌 굿즈샵</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/detail') }}>상세페이지</Nav.Link>
            <Nav.Link onClick={() => { navigate('/fromis') }}>프로미스나인</Nav.Link>
            <Nav.Link onClick={() => { navigate('/lesserafim') }}>르세라핌</Nav.Link>
            <Nav.Link onClick={() => { navigate('/ive') }}>아이브</Nav.Link>
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
                      <Goods shoes={shoes[j]} num={j + 1}></Goods>
                    )
                  })
                }
              </Row>
            </Container>
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
            }}>가나다순</button>
          </>
        } />
        <Route path="/detail" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/fromis" element={<div>프로미스나인</div>} />
        <Route path="/lesserafim" element={<div>르세라핌</div>} />
        <Route path="/ive" element={<div>아이브</div>} />
        <Route path="*" element={<div>없는 페이지입니다.</div>} />

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
      <img src={`https://codingapple1.github.io/shop/shoes${props.num}.jpg`} style={{ width: '80%' }}></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;