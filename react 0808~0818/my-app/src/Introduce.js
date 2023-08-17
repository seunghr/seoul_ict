import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./Introduce.css"
import "./Custom.css"

function App() {
  return (
    <>
        <Container>
            <h1 className='top'>자기소개</h1>
        </Container>
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT HYE RIN</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            {/*이미지 파일의 경로는 public을 기본으로 한다*/}
            <Image src="./human.jpg" alt="프로필 사진" 
            style={{ width: 300 }} 
            roundedCircle />
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p>
              # 승혜린 <br />
              📧 Email : bcax1208@naver.com<br />
              📱 phone : 010 - 7512 - 9712 <br />
              🙏 github : https://github.com/seunghr<br />
              <br />
              # 장점 <br />
              빠른 판단력 <br />
              성실한 태도 <br />
              <br />
            </p>
            </Col>
        </Row>
      </Container>
      <Container id="portfolio">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./banner01.jpg"
                alt="First slide"
                width="1280px"
                height="600px"
              />
              <Carousel.Caption>
                <h3 className='ice'>ice</h3>
                <p><a class="link-opacity-100" href="https://web-ice-4jpolf2alg35y70a.sel3.cloudtype.app/" >clcik</a></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./food.jpg"
                alt="Second slide"
                width="1280px"
                height="600px"
              />

              <Carousel.Caption>
                <h3 className='food'>food</h3>
                <p><a class="link" href="https://web-food-crjhvk2blgdhc31g.sel3.cloudtype.app/" >clcik</a></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image.png"
                alt="Third slide"
                width="1280px"
                height="600px"
              />

              <Carousel.Caption>
                <h3 className='food'>list</h3>
                <p><a class="link" href="https://nipa-frontend-todo-1-hye.netlify.app" >clcik</a></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row>
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "rgb(193, 188, 244)", color: "#fff", margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>bczx1208@naver.com</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "rgb(193, 188, 244)", color: "#fff", margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-7512-9712</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "rgb(193, 188, 244)", color: "#fff", margin: 0, padding: 3 }}>SNS</h3>
            <p style={{ margin: 0, padding: 10 }}>velog.io/@bczx1208</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; hye rin. All Right Reserved.
          </Row>
      </Container>
    </>
  );
}

export default App;