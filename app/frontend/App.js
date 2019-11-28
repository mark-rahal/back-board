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
  constructor() {
    super()
    this.state = {user: undefined};
    this.handleLoginStateChange = this.handleLoginStateChange.bind(this);
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
              <Navbar bg='light' variant='light'>
                <Nav className='mr-auto'>
                <Link to='/login'>Login</Link>
                </Nav>
              </Navbar>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Switch>
                <Route path='/'>
                  <Browse></Browse>
                </Route>
                <Route path='/login'>
                  <Login onLoginStateChange={this.handleLoginStateChange}></Login>
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
