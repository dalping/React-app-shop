import {Navbar,Container,NavDropdown,Nav} from 'react-bootstrap';
import React from 'react'
import { useHistory } from 'react-router';


function ShopNavbar() {
    let history = useHistory();

    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
        <Navbar.Brand onClick={()=>{history.push('/React-app-shop')}}>🍰허니베리</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{history.push('/React-app-shop/best')}}>베스트</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/React-app-shop/new')}}>신상품</Nav.Link>
            <NavDropdown title="카테고리" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={()=>{history.push('/React-app-shop/cake')}}>케이크</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{history.push('/React-app-shop/cookie')}}>쿠키</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{history.push('/React-app-shop/candy')}}>사탕</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{history.push('/React-app-shop/etc')}}>기타</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={()=>{history.push('/React-app-shop/cart')}}>장바구니</Nav.Link>
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