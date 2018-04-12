import React, {Component} from 'react';

class SmoothieIngredient extends Component{
  render(){
    let Ingredient = null;
    switch (this.props.type) {
      case ('Strawberry'): Ingredient = <div>Strawberry</div>
        break;
      case ('Banana'): Ingredient = <div>Banana</div>
        break;
      case ('Protein'): Ingredient = <div> Protein</div>
        break;
      default: Ingredient = null;

    }
    return Ingredient
  }


}

export default SmoothieIngredient;
