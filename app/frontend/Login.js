import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    e.preventDefault();
    this.props.onLoginStateChange(true);
  }

  auth(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const credentials = { username: data.get('username'), password: data.get('password') }
    var options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    };
    fetch('/auth', options).then(function(res) {
      res.json().then(function(data) {
        console.log(data);
      });
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
                  <Form.Control type='text' name='username' placeholder='Username'></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor='password'>Password</Form.Label>
                  <Form.Control type='password' name='password' placeholder='Password'></Form.Control>
                </Form.Group>
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