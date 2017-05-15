import React from 'react';

const emojis = ['😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'];

const Component = props => (


  <div className='flex note-exercise-s'>

      {/* <div className='emoji'>{'😡'}</div>
    <div className='emoji'>{'🙁'}</div>
    <div className='emoji'>{'😐'}</div>
    <div className='emoji'>{'🙂'}</div>
    <div className='emoji'>{'😁'}</div>
     reimplement emojis using map -> emojis [...].map(...)*/}

      {emojis.map((em) => <div key={em} className='emoji'> {em}</div>)}

    </div>
);

export default Component;
