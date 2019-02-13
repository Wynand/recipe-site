import React, { Component } from 'react';
import Recipe from './recipe.js';
import './App.css';

import {default as recipes} from './recipes.json';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (<React.Fragment>
      <nav className = "navbar navbar-default" role = "navigation">
        
        <div className = "navbar-header">
          Wynand's Recipe Site
        </div>
        
        <div>
          {recipes.map(recipe=><p key={recipe.title} className = "navbar-text navbar-left">
            <button className = "navbar-link" onClick = {()=>this.setState({currRecipe:recipe})}>
              {recipe.title} 
            </button>
          </p>)}
        </div>
        
      </nav>

      {this.state.currRecipe !== undefined ?<Recipe recipe = {this.state.currRecipe}/> : "Select a recipe!" }

      <footer className="container">
        <p>Website made with <span role="img" aria-label="burrito">🌯</span> by Wynand</p>
      </footer>
    </React.Fragment>);
  }
}

export default App;
