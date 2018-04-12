import React from 'react';
import classes from './Smoothie.css';
import SmoothieIngredient from './SmoothieIngredient/SmoothieIngredient';


const smoothie =(props) => {
    let addedIngredients = Object.keys(props.ingredients).map(
      igKey => {
        return [...Array(props.ingredients[igKey])].map(
          ( _, i) => { return <SmoothieIngredient key= {igKey+i} type= {igKey} /> })})

    return (
      <div className= {classes.Smoothie}>
        {addedIngredients}
      </div>
    )
  }

export default smoothie;
