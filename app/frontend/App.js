import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import Browse from './Browse';
import Login from './Login';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {user: undefined};
  }

  handleLoginStateChange(value) {
    this.setState({user: undefined});
  }

  render() {
    return (
      <Router>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h1 className='display-1 text-center'>
                BackBoard
              </h1>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Navbar bg='light'>
                <Nav className='mr-auto'>
                  <LinkContainer to='/'>
                    <Nav.Link href='#'>Browse</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/login'>
                    <Nav.Link href='#'>Login</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route path='/login'>
                  <Login onLoginStateChange={this.handleLoginStateChange}></Login>
                </Route>
                <Route path='/'>
                  <Browse></Browse>
                </Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
