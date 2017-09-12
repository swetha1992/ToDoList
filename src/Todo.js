import React from 'react';

export default class Todo extends React.Component{

    removeItem(){
        this.props.action(this.props.title)
    }

    render (){
        return <li>
                   <span>{this.props.title}</span>
                   <button onClick={()=>{this.removeItem()}}>X</button>
               </li>
    }
 }