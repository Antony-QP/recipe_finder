import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchRecipes: PropTypes.func.isRequired,
    clearRecipes: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "red lighten-4");
    } else {
      this.props.searchRecipes(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className='row'>
        <div className="form-container">
        <form className='col s12 search' onSubmit={this.onSubmit}>
          <div className='input-field col 12 center-align'>
            <input
              type='text'
              name='text'
              placeholder='Search Recipes'
              value={this.state.text}
              onChange={this.onChange}
            />
            <button
              className='btn waves-effect waves-light'
              type='submit'
              name='action'>
              Submit
              <i className='material-icons right'></i>
            </button>
            {this.props.showClear && (
              <button
                className='btn waves-effect waves-light   grey lighten-1'
                name='action'
                onClick={this.props.clearRecipes}>
                Clear
              </button>
            )}
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Search;
