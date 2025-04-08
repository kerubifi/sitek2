import React, { Component } from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../images/logo.jpg'
import useric from '../images/user.png'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import About from '../Pages/About'
import Turnirs from '../Pages/Turnirs'

export default class Header extends Component {
  render() {
    return (
      <>
      <Navbar>
          <Container>
            <Navbar.Brand href="/" >
              <img src={logo} height="50" width="50" alt='logo'/>
            </Navbar.Brand>
            
            <Navbar.Collapse >
              <Nav>
                <Nav.Link href="/">Главная</Nav.Link>
                <Nav.Link href="/about"> О нас</Nav.Link>
                <Nav.Link href="/turnirs"> Турниры</Nav.Link>
                <Button><img src={useric} height="20" width="20" alt='logo'/></Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>

      <Router>
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/sign" component={Turnirs}/>
          </Routes>
      </Router>
      </>
    )
  }
}
