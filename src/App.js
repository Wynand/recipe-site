import React, { Component } from 'react';
import Recipe from './recipe.js'
import './App.css';

let recipes = [
  {
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
  },{
    title: "Boysonberry Chicken",
    description: "Moerby Hoender in Afrikaans - A traditional recipe which my dad makes, and I'm trying to reproduce",
    steps: [
      {
        instruction: "Roast onion with curry, pepper, ginger, sugar",
        ingredients: [
          {
            name:"Onion",
            amount:"1",
            unit:""
          },
          {
            name:"oil",
            amount:"1",
            unit:"tbsp"
          },
          {
            name:"curry",
            amount:"0.5",
            unit:"tbsp"
          },
          {
            name:"pepper",
            amount:"0.25",
            unit:"tsp"
          },
          {
            name:"ginger",
            amount:"1",
            unit:"tsp"
          },
          {
            name:"sugar",
            amount:"1",
            unit:"tbsp"
          },
        ]
      },
      {
        instruction: "Brown chicken with onions",
        ingredients: [
          {
            name:"Chicken",
            amount:"6",
            unit:"drumsticks"
          },
        ]
      },
      {
        instruction: "Add bbq sauce, lemon juice, vinegar, potatoes, and stew on low until potatoes are soft",
        ingredients: [
          {
            name:"bbq sauce",
            amount:"",
            unit:""
          },
          {
            name:"vinegar",
            amount:"1",
            unit:"tbsp"
          },
          {
            name:"lemon juice",
            amount:"1",
            unit:"tbsp"
          },
          {
            name:"soy sauce",
            amount:"1",
            unit:"tbsp"
          },
          {
            name:"onion soup",
            amount:"1",
            unit:"pack"
          },
          {
            name:"salt",
            amount:"1",
            unit:"tsp"
          },
        ]
      },
    ]
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (<React.Fragment>
      <nav class = "navbar navbar-default" role = "navigation">
        
        <div class = "navbar-header">
          Wynand's Recipe Site
        </div>
        
        <div>
          {recipes.map(recipe=><p class = "navbar-text navbar-left">
            <button class = "navbar-link" onClick = {()=>this.setState({currRecipe:recipe})}>
              {recipe.title} 
            </button>
          </p>)}
        </div>
        
      </nav>

      {this.state.currRecipe !== undefined ?<Recipe recipe = {this.state.currRecipe}/> : "Select a recipe!" }

      <footer class="container">
        <p>Website made with <span role="img" aria-label="burrito">🌯</span> by Wynand</p>
      </footer>
    </React.Fragment>);
  }
}

export default App;
