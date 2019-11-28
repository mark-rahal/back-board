import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.auth = this.auth.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.props.onLoginStateChange(true);
  }

  auth(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const credentials = { username: data.get('username'), password: data.get('password') }
    console.log(credentials);
    var options = {
      method: 'POST',
      body: JSON.stringify(credentials)
    };
    fetch('/auth', options).then(function(res) {
      console.log(res);
    });
  }

  render() {
    return (
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Form onSubmit={this.auth}>
                <Form.Group>
                  <Form.Label htmlFor='username'>Username</Form.Label>
                  <Form.Control type='text' id='username' placeholder='Username'></Form.Control>
                </Form.Group>
                <Form>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                  <Form.Control type='password' id='password' placeholder='Password'></Form.Control>
                </Form>
                <Button type='submit' variant='primary'>Submit</Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
    );
  }
}

export default Login;