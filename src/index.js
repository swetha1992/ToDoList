import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './clock';
import Dashboard from './dashboard';

const node= document.getElementById('root');

//ReactDOM.render(<Clock />, node);
ReactDOM.render(<Dashboard />, node);