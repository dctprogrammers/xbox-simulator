import React, { useState } from 'react';

import Button from './components/Button';
import ListComponent from './components/ListComponent';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [chamber, setChamber] = useState({
    title: '',
  });

  const { title } = chamber;

  const onChange = (e) =>
    setChamber({ ...chamber, [e.target.name]: e.target.value });

  // const [components, setComponents] = useState([{ service: '' }]);
  const [components, setComponents] = useState([
    { title: 'Clean 1' },
    { title: 'Clean 2' },
    { title: 'Pre-Rinse' },
    { title: 'Rinse' },
    { title: 'Dry 1' },
    { title: 'Dry 2' },
    { title: 'Dry 3' },
    { title: 'Dry 4' },
  ]);

  // eslint-disable-next-line no-unused-vars
  // const [componentNames, setComponentNames] = useState([
  //   'Venus',
  //   'Earth',
  //   'Mars',
  //   'Jupiter',
  //   'Saturn',
  //   'Uranus',
  //   'Neptune',
  // ]);

  const addComponent = () => {
    if (chamber.title.length > 0) {
      setComponents([...components, { title }]);
      setChamber({ title: '' });
      document.getElementById('chamber-title').value = '';
      console.log(components);
    } else {
      window.alert('FU');
    }
    // setComponents([...components, '']);
    // if (componentNames.length > 0) {
    // setComponents([...components, componentNames[0]]);
    // console.log(components);
    // console.log(componentNames[0]);
    //   componentNames.splice(0, 1);
    // } else {
    //   window.alert('No more planets to add!');
    // }
  };

  const removeComponent = (index) => {
    const list = [...components];
    list.splice(index, 1);
    setComponents(list);
  };

  return (
    <div className='app'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      // </header> */}
      <header className='app-header'>DCT XBOX Simulator</header>
      <div className='content'>
        {/* <form className='form' autoComplete='off'> */}
        <div className='left'>
          <label htmlFor='chamber-title'>Chamber Title</label>
          <div className='components'>
            <input
              type='text'
              id='chamber-title'
              name='title'
              value={title}
              onChange={onChange}
              required
            />
            <Button
              className='add-button'
              onClick={addComponent}
              text='Add Component'
            />
          </div>
        </div>
        {/* </form> */}
        <div className='right'>
          {/* <ListComponent text='Sample Component' /> */}
          {components.map((singleComponent, index) => (
            <div className='inner' key={index}>
              <ListComponent title={singleComponent.title} />
              {components.length > 8 && components.length - 1 === index && (
                <Button
                  className='remove-button'
                  onClick={() => removeComponent(components.length - 1)}
                  text='Remove Component'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
