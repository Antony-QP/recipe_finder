import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class RecipeItem extends Component {
constructor(){
  super();
  this.state = {
    label : "Prawn and Fennel Bisque",
    image : "https://www.edamam.com/web-img/096/096785fa66988574b8151f2057648dc0.jpg",
    ingredients : [
      "450g raw tiger prawn in their shells",
      "4 tbsp olive oil",
      "1 large onion, chopped",
      "1 large fennel bulb, chopped, fronds reserved",
      "2 carrot, chopped",
      "150ml dry white wine",
      "1 tbsp brandy",
      "400g can chopped tomato",
      "1l fish stock",
      "2 generous pinches paprika",
      "150ml pot double cream",
      "8 tiger prawn, shelled, but tail tips left on (optional)",
      "fennel fronds (optional)"
  ],
  method : "https://www.bbcgoodfood.com/recipes/prawn-fennel-bisque"
  }
}


  render() {
   return (
<div class="col s12 m7">
  <h2 class="header">{this.state.label}</h2>
    <div class="card horizontal">
    <div class="card-image">
        <img src={this.state.image} alt=""/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <ul id="ingredient-list">
            {this.state.ingredients}
          </ul>
          <a class="waves-effect waves-light btn" href={this.state.method} style={{}}>Method</a>
        </div>
      </div>
    </div>
  </div>     
  )
}
}

export default RecipeItem
