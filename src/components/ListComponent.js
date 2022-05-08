import React from 'react';

import './ListComponent.css';

const ListComponent = (props) => {
  return (
    <div className='component'>
      <h1>{props.title}</h1>
    </div>
  );
};

export default ListComponent;
