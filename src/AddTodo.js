import React from 'react';
import Todo from './Todo';

export default class AddTodo extends React.Component{

    addItem(){
        const todo = this.refs.todo.value;
        this.props.action(todo)
    }

    render (){
        return <div>
                   <label>{this.props.label}</label>
                   <input ref='todo'/>
                   <button onClick={()=>{this.addItem()}}>ADD</button>
               </div>
    }
 }