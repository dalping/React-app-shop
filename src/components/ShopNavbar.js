import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import React from 'react'

function ShopNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
        <Navbar.Brand href="#home">🍰Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">베스트</Nav.Link>
            <Nav.Link href="#pricing">신상품</Nav.Link>
            <NavDropdown title="카테고리" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">러닝화</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">캐주얼</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">정장</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">기타</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">장바구니</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              주문/배송
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default ShopNavbar