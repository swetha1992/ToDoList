import React from 'react';


export default class Clock extends React.Component{

  constructor(){
        super();
        this.state ={date : new Date()}
  }
  componentDidMount(){
     this.timer = setInterval(()=>this.tick(),1000)
  }

  tick(){
    this.setState({date : new Date()})
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render(){
        return (<h1>{this.state.date.toLocaleTimeString()}</h1>);
  }
}