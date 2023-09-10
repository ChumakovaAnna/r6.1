import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Clock from './components/Clock';
import {nanoid} from 'nanoid';

function App() {
  const [clocks, setClocks] = useState([
    {
      id: nanoid(),
      name: 'first',
      zone: 0,
    },
    {
      id: nanoid(),
      name: 'second',
      zone: 3,
    },
  ]);

  const handleSubmit = (newClock) => {
    setClocks(prevState => [...prevState, newClock]);
  };

  const handleDelete = (id) => {
    setClocks(prevState => (prevState.filter(item => item.id !== id)));
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}></Form>
      <div className='container'>
        {clocks.map(item => <Clock onClose={handleDelete} key={item.id} item={item}></Clock>)}
      </div>
    </div>
  );
}

export default App;
