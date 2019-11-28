import React from 'react';
import Card from 'react-bootstrap/Card';

class Thread extends React.Component {
  render() {
    return (
      <div className='Thread w-25 p-3'>
        <Card>
          <Card.Header>
            {this.props.title}
          </Card.Header>
          <Card.Body>
            {this.props.body}
          </Card.Body>
        </Card>
      </div>
    );
  }  
}

export default Thread;