import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux';
import Counter from './Counter'
import Todo from './Todo'

function todo(state=[],action){
  switch(action.type){
    case "add_todo":
    return [...state,action.data];
    case 'remove_todo':
    return [...state.slice(action.data.index),...state.slice(action.data.index+1)];
  }
  return state;
}

function counter(state=0,action){
  switch(action.type){
    case "inc":
    return state+1;
    case 'dec':
    return state-1;
  }
  return state;
}

let promiseMiddleware=({getState,dispatch})=>(next)=>(action)=>{
  console.log("previous state ",getState())
  console.log("action -> ",action.type)
  let returnAction;
  if(action.types){
    fetch()
  }else{
    
  returnAction= next(action)
  }
  console.log("next state ",getState())
  return returnAction;
}
let enhancer=applyMiddleware(promiseMiddleware)

let store=createStore(combineReducers({todo,counter}),enhancer);
// store.subscribe(()=>{
// console.log("subscribe",store.getState());
// })

console.log(store.getState());

store.dispatch({type:"add_todo",data:"vimal"})
console.log(store.getState());

store.dispatch({type:"inc"})
console.log(store.getState());

store.dispatch({type:"dec"})
console.log(store.getState());

store.dispatch({type:"remove_todo",data:{index:1}})
console.log(store.getState());




class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={store}>
      Counter
        <Counter/><br/><br/>
        Todo
        <Todo/>
      </Provider>
    );
  }
}



render(<App />, document.getElementById('root'));
