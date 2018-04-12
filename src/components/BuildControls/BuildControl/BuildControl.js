import React from 'react';

const buildControl =(props)=>(
  <div>
    <div>{props.label}</div>
    <button onClick = {props.removed}
      disabled = {props.hasingredient}>Less</button>
    <button onClick = {props.added}>More</button>
  </div>
)

export default buildControl;
