import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls=[
  {label:'Strawberry'},
  {label:'Banana'},
  {label:'Protein'}
];


const buildControls =(props)=>(
  <div className = {classes.buildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        label = {ctrl.label}
        key = {ctrl.label}
        added = {()=>props.IngredientAdded(ctrl.label)}
        removed = {() => props.IngredientRemoved(ctrl.label)}
        hasingredient = {props.ingredients[ctrl.label]>0 ? false: true
        }
        />
    ))}
    <button disabled = {props.disabledInfo}>Order Now</button>
  </div>
)

export default buildControls;
