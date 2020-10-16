import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'


const RecipeItem = (props) => {
  const { label, image, ingredientLines, url} = props.recipe
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
            {ingredientLines}
          </ul>
          <a className="waves-effect waves-light btn" href={url} style={{}}>Method</a> 
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
