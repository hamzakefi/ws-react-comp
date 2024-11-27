// App.js
import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';

const firstName = "Hamza"; 

const App = () => {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there"}!</p>
    </div>
  );
};

export default App;
