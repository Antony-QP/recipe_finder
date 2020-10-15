import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer"
import Recipes from "./components/recipes/Recipes"
import "../src/App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



class App extends Component {

  state = {
    recipe:{},
    recipes : []
  }

  render() {
    return (
    <Router>
      <body>
      <Navbar />
      <Route exact path='/about' component={About} />
        <main>
          <Recipes></Recipes>
        </main>
        <Footer></Footer>
      </body>
    </Router>
    )
  }
}
export default App;
