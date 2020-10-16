import React, { Component } from "react";
import Navbar from "./components/layout/Navbar.js";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Recipes from "./components/recipes/Recipes";
import axios from 'axios';
import "../src/App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";



class App extends Component {
  state = {
    recipes:[],
        //   {    label : "Prawn and Fennel Bisque",
        //   image : "https://www.edamam.com/web-img/096/096785fa66988574b8151f2057648dc0.jpg",
        //   ingredients : [
        //     "450g raw tiger prawn in their shells",
        //     "4 tbsp olive oil",
        //     "1 large onion, chopped",
        //     "1 large fennel bulb, chopped, fronds reserved",
        //     "2 carrot, chopped",
        //     "150ml dry white wine",
        //     "1 tbsp brandy",
        //     "400g can chopped tomato",
        //     "1l fish stock",
        //     "2 generous pinches paprika",
        //     "150ml pot double cream",
        //     "8 tiger prawn, shelled, but tail tips left on (optional)",
        //     "fennel fronds (optional)"
        // ],
        // method : "https://www.bbcgoodfood.com/recipes/prawn-fennel-bisque",
        // id : "0"},{
        //   label : "King Prawn Curry",
        //   image : "https://www.edamam.com/web-img/668/66831119c39237feffef8d0680a00eaa.jpg",
        //   ingredients : [
        //     "2 pounds king prawn/shrimp",
        //     "1 large onion",
        //     "6 garlic cloves",
        //     "4 inches ginger",
        //     "2 handfuls cilantro, chopped",
        //     "1 stalk lemon grass",
        //     "3 tsp salt",
        //     "1 1/2 tsp turmeric powder",
        //     "1/4 tsp chili powder",
        //     "1/2 tsp garam masala",
        //     "2 tomatoes, chopped",
        //     "1/2 cup can plum tomatoes",
        //     "2 tbsp sour cream",
        //     "6 tbsp olive oil",
        //     "1/4 cup water",
        //     "1 crushed black cardamon",
        //     "2 tsp cumin seeds"
        // ],
        // method : "https://food52.com/recipes/5216-king-prawn-curry",
        // id : "1"
        // },{
        //   label : "Prawn Satay",
        //   image : "https://www.edamam.com/web-img/fee/fee4f846371dcd5b863bda1d2d8a3324.jpg",
        //   ingredients : [
        //     "3 large mandarins- sliced",
        //                 "2 tbsp chilli pepper flakes",
        //                 "2 tbsp kosher salt",
        //                 "500g jumbo prawns",
        //                 "1 tbsp extra virgin olive oil"
        // ],
        // method : "http://honestcooking.com/prawn-satay-recipe/",
        // id: "2"
        // }
        // ],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading:true})
    console.log(process.env.REACT_APP_APPLICATION_KEY)
    
    const res = await axios.get(`https://api.edamam.com/search?q=prawn&app_id=${process.env.REACT_APP_APPLICATION_ID}&app_key=${process.env.REACT_APP_APPLICATION_KEY}&from=0&to=3`)

      this.setState({recipes: res.data.hits, loading: false})
      console.log(res.data)
  }

  render() {
    return (
    <Router>
      <body>
      <Navbar />
      <Route exact path='/about' component={About} />
        <main>
          <Recipes  loading={this.state.loading} recipes={this.state.recipes}></Recipes>
        </main>
        <Footer></Footer>
      </body>
    </Router>
    )
  }
}
export default App;
