import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './Welcome.css';

const Welcome = () => {

  const nav = useNavigate();

  return (
    <div className='welcome'>
      <div className='contentWelcome'>
        <h1 className='name'>IT Solution</h1>
        <p className='profession'>by Claudiu Olaru</p>
        <Button position='center' onClick={() => nav('/home')}>Let`s go</Button>
      </div>
    </div>
  ) 
}

export default Welcome;
