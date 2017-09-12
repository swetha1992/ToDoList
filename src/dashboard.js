import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

//function Greeting(props){
//	return (<div>
//			<h1> {props.message} </h1>
//			<Name name={props.name} />
//		</div>)
//}

export default class DashBoard extends React.Component{

  constructor(){
        super();
        this.state ={label :"write your list" , toDos : ["Eat","Drink","Learn","Repeat"]};
        this.addTodo = this.addTodo.bind(this);
        this.delete = this.delete.bind(this);
  }

    addTodo(todo){
        this.setState({toDos : this.state.toDos.concat(todo)});
    }

    delete(todo){
      this.setState({toDos : this.state.toDos.filter( _todo => _todo !== todo)});
    }


  render(){
        return (
        <div>
            <AddTodo action={this.addTodo} label={this.state.label}/>
            <ul>
                {this.state.toDos.map(todo => <Todo title={todo} action={this.delete} ></Todo>)}
            </ul>
        </div>
        );

  }
}



//const dashboard = function (){
//    return(<div>
//        <input type="text" id="todoitem"/>
//        <button type="button">Add</button>
//        </div>);
//}
//
//
//export default dashboard;