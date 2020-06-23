import React from 'react';
import {connect} from 'react-redux';

function Counter({counter,dispatch}){
  return <div>
  <div onClick={()=>dispatch({type:"dec"})}>Dec</div>
  {counter}
  <div onClick={()=>dispatch({type:"inc"})}>Inc</div>
  </div>
}
export default connect((state)=>{
  return {counter:state.counter}
})(Counter)