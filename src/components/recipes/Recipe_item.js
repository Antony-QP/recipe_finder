import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const RecipeItem = ({recipe:{label, image, ingredients, method }}) => {
   return (
<div className="col s12 m7">
  <h2 className="header">{label}</h2>
    <div className="card horizontal">
    <div className="card-image">
        <img src={image} alt=""/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <ul id="ingredient-list">
            {ingredients}
          </ul>
          <a className="waves-effect waves-light btn" href={method} style={{}}>Method</a> 
        </div>
      </div>
    </div>
  </div>     
  )
}

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default RecipeItem
