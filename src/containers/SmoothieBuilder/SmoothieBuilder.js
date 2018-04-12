import React, {Component, Fragment} from 'react';
import Smoothie from '../../components/Smoothie/Smoothie';
import BuildControls from '../../components/BuildControls/BuildControls'

const priceTable={
  Strawberry: 2,
  Banana:1.5,
  Protein:2.5
};

class SmoothieBuilder extends Component{
  state = {
    ingredients:{
      Strawberry: 0,
      Banana : 0,
      Protein: 0
    },
    price: 5
  }

  addIngredientHandler=(type)=>{
    const oldIngredients = this.state.ingredients[type];
    const addIngredients = oldIngredients + 1;
    const newIngredients = {...this.state.ingredients};
      newIngredients[type] = addIngredients;
    const oldPrice = this.state.price;
    const newPrice = oldPrice + priceTable[type];
    this.setState({ingredients:newIngredients, price:newPrice});
    console.log(this.state.ingredients)
  }
  removeIngredientHandler=(type)=>{
    if (this.state.ingredients[type]<=0){
      return;
    }
    const oldIngredients = this.state.ingredients[type];
    const addIngredients = oldIngredients - 1;
    const newIngredients = {...this.state.ingredients};
      newIngredients[type] = addIngredients;
    const oldPrice = this.state.price;
    const newPrice = oldPrice - priceTable[type];
    this.setState({ingredients:newIngredients, price:newPrice});
  }

  render(){
    return(
      <Fragment>
          <Smoothie ingredients={this.state.ingredients} />
        <div>
          <BuildControls IngredientAdded= {this.addIngredientHandler}
            IngredientRemoved = {this.removeIngredientHandler}
            price = {this.state.price}
            disabledInfo = {this.state.price>5 ? false : true}
            ingredients = {this.state.ingredients}
          />
        </div>
      </Fragment>
    )
  }
}

export default SmoothieBuilder;
