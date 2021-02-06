import React from "react";
import RecipeItem from "./Recipe_item";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Recipes = ({ recipes, loading }) => {
  if (loading) {
    return <Spinner/>;
  } else {
    return (
      <div className='container'>
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} recipe={recipe.recipe} />
        ))}
      </div>
    );
  }
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Recipes;
