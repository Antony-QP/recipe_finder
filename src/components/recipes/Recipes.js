
import React from 'react'
import RecipeItem from './Recipe_item'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const Recipes = ({recipes, loading}) => {
 if(loading){
  return <Spinner/>
 }else{
  return(
  <div >
  {recipes.map(recipe => (
    <RecipeItem key={recipe.id} recipe={recipe.recipe} />
  ))}
</div>
  )
 }

  }

  Recipes.propTypes = {
   recipes : PropTypes.array.isRequired,
   loading : PropTypes.bool.isRequired,
  }


// const recipeStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem'
// }

export default Recipes