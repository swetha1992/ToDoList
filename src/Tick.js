import React from 'react';
import ReactDOM from 'react-dom';
const node= document.getElementById('root');

export function tick(){
   const clock = ( <div> {new Date().toString()}</div>);
   ReactDOM.render(clock, node);
}

