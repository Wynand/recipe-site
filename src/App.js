import React, { Component } from 'react';
import Recipe from './recipe.js'
import './App.css';

let recipe = {
  title: "Curry and Rice",
  description: "Recipe for somewhat traditional Curry (ied beef) and Rice recipe modified by my mom and I",
  steps: [
    {
      instruction:"Braise the onions and spices in hot oil.\n Remove half the onions from the pan and set aside.",
      ingredients:[
        {
          name: "Onion",
          amount: 1,
          unit: undefined
        },
        {
          name: "Garlic Clove",
          amount: 1.5,
          unit: "g"
        },
        {
          name: "Ginger",
          amount: 1,
          unit: "tsp"
        },
        {
          name: "Oil",
          amount: 2,
          unit: "tsp"
        },
        {
          name: "Curry",
          amount: 0.5,
          unit: "tbsp"
        },
        {
          name: "Coriander",
          amount: 1,
          unit: "tbsp"
        },
        {
          name: "Turmuric",
          amount: 0.5,
          unit: "tsp"
        },
        {
          name: "Cumin",
          amount: 0.5,
          unit: "tsp"
        },
        {
          name: "Pepper",
          amount: 0.25,
          unit: "tsp"
        },
      ]
    },
    {
      instruction:"Add the meat, stir and simmer slowly until brown.\nAdd enough hot water so it comes 2.5cm up the sides of the sauce pan.",
      ingredients:[
        {
          name: "Ground Beef",
          amount: 670,
          unit: "g"
        },
      ]
    },
    {
      instruction:"Mix the remaining ingredients (including the onions), and add to the meat.\nSimmer for about 1.5 hours or until the meat is tender.",
      ingredients:[
        {
          name: "Potatoes",
          amount: 130,
          unit: "g"
        },
        {
          name: "Carrots",
          amount: 130,
          unit: "g"
        },
        {
          name: "Cinnamon",
          amount: 0.5,
          unit: "tsp"
        },
        {
          name: "Salt",
          amount: 1,
          unit: "tsp"
        },
        {
          name: "Cardamom Seeds",
          amount: 0.5,
          unit: "tsp"
        },
        {
          name: "Cake Flour",
          amount: 1,
          unit: "tsp"
        },
        {
          name: "Sugar",
          amount: 1,
          unit: "tsp"
        },
        {
          name: "Vinegar",
          amount: 2,
          unit: "tbsp"
        },
      ]
    },
    {
      instruction:"Serve with Rice and Chutney",
      ingredients:[]
    },
  ]
}

class App extends Component {
  render() {
    return (<React.Fragment>

    <Recipe recipe = {recipe}/>

    <footer class="container">
      <p>Website made with <span role="img" aria-label="burrito">🌯</span> by Wynand</p>
    </footer>
    </React.Fragment>);
  }
}

export default App;
