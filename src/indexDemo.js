import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {tick} from './Tick';

//Step1

//const myName = "Shweta";
//const node= document.getElementById('root');
//const component = <Greeting name="ridhi" message=" hello"/>
//
//function Name(props){
//	return <h2>	{props.name}</h2>
//}
//
//function Greeting(props){
//	return (<div>
//			<h1> {props.message} </h1>
//			<Name name={props.name} />
//		</div>)
//}
//
//ReactDOM.render(component, node);


//Step2


setInterval(tick,1000);


//step 3

