import React,{useEffect} from 'react';
import {connect} from 'react-redux';


function Todo({todo,dispatch}){
  useEffect(()=>{
    fetch('/todolist.json').then(res=>res.json()).then(res=>{
         dispatch({type:"init",data:res})
    })
  },[])
  return <div>
  
  <div onClick={()=>dispatch({type:"add_todo",data:Math.random().toString(36).substr(2)})}>Add Todo +</div>
  {todo.map(item=>{
    return <div>{item}</div>
  })}
  </div>
}
export default connect((state)=>{
  
  return {todo:state.todo}
})(Todo)