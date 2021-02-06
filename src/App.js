import React, { Component, Fragment } from "react";
import Navbar from "./components/layout/Navbar.js";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Recipes from "./components/recipes/Recipes";
import Search from "./components/recipes/Search";
import Alert from "./components/layout/Alert"
import CoverImage from './components/layout/CoverImage'
import axios from 'axios';
import "../src/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";




class App extends Component {
  state = {
    recipes:[],
    loading: false,
    alert : null
  }

  searchRecipes = async (text) => {
    this.setState({ loading : true})
    const res = await axios.get(`https://api.edamam.com/search?q=${text}&app_id=${process.env.REACT_APP_APPLICATION_ID}&app_key=${process.env.REACT_APP_APPLICATION_KEY}&from=0&to=10`)

    this.setState({recipes: res.data.hits, loading: false})
    console.log(res.data)
  }

  clearRecipes = () => {
    this.setState({ recipes : [], loading : false})
  }

  setAlert = (msg, type) => {
    this.setState({ alert : {msg: msg, type : type}})
    
    setTimeout(() => this.setState({ alert: null}), 3000)
  }

  

  render() {
    return (
    <Router>
      <body>
      <Navbar />
        <main className="hero-image">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/recipe_finder' render={props => (
              <Fragment>
          <Search searchRecipes={this.searchRecipes} clearRecipes={this.clearRecipes} showClear={this.state.recipes.length > 0 ? true : false} setAlert = {this.setAlert}/>
          <Recipes  loading={this.state.loading} recipes={this.state.recipes}></Recipes>
              </Fragment>
            )}/>
            <Route path='/about' component={About}/>
          </Switch>
        </main>
        <Footer></Footer>
      </body>
    </Router>
    )
  }
}
export default App;
