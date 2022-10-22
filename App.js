import { useState } from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">



      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className='link' to="/">아이돌 굿즈샵</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className='link' to="/detail">상세페이지</Link>
            </Nav.Link>
            <Nav.Link href="#home">fromis_9</Nav.Link>
            <Nav.Link href="#features">르세라핌</Nav.Link>
            <Nav.Link href="#pricing">아이브</Nav.Link>
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
          </>
        } />
        <Route path="/detail" element={<div>상세페이지임</div>} />
      </Routes>

    </div>
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