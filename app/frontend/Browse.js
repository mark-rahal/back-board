import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import Thread from './Thread';
import Container from 'react-bootstrap/Container';

var threads = [
  {
    title: 'Thread 1',
    body: 'loemawiahodha iohaoihoiahfoiwah'
  },
  {
    title: 'Thread 1',
    body: 'loemawiahodha iohaoihoiahfoiwah'
  },
  {
    title: 'Thread 1',
    body: 'loemawiahodha iohaoihoiahfoiwah'
  },
  {
    title: 'Thread 1',
    body: 'loemawiahodha iohaoihoiahfoiwah'
  },
  {
    title: 'Thread 1',
    body: 'loemawiahodha iohaoihoiahfoiwah'
  },
  {
    title: 'Thread 1',
    body: 'loemawiahodha iohaoihoiahfoiwah'
  }
];

class Browse extends React.Component {
  render() {
    function createThread(e) {
      console.log('clicked')
    }
    return (
      <Container>
        <Row>
          <Col>
            <Button onClick={createThread}>Create Thread</Button>
          </Col>
        </Row>
        <Row>
          {
            threads.map(function (thread) {
              return <Thread {...thread}></Thread>
            })
          }
        </Row>
      </Container>
    );
  }
}

export default Browse;