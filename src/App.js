import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (<React.Fragment>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <main role="main">

      {/*<-- Main jumbotron for a primary marketing message or call to action -->*/}
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Curry and Rice</h1>
          <p>Recipe for somewhat traditional Curry (ied beef) and Rice recipe modified by my mom and I</p>
        </div>
      </div>

      <div class="container">
        {/*<!-- Example row of columns -->*/}
        <div class="row">
          <div class="col-md-4">
            <h2>1</h2>
            <p> 
              Braise the onions and spices in the hot oil. <br/> Remove half the onions from the pan and set aside.
            </p>
          </div>
          <div class="col-md-4">
            <p> 1 Onion </p>
            <p> 0.45 Garlic Clove </p>
            <p> 2.68 mL Ginger </p>
            <p> 11.15 mL Oil </p>
            <p> 8.48 mL Curry </p>
            <p> 17.84g Coriander </p>
            <p> 2mL Turmuric </p>
            <p> 2.68mL Cumin </p>
            <p> 1.34 mL Pepper </p>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-4">
            <h2>2</h2>
            <p> 
              Add the meat, stir and simmer slowly until brown. <br/> 
              Add enough hot water so it comes 2.5cm up the sides of the sauce pan.
            </p>
          </div>
          <div class="col-md-4">
            <p> 670g Ground beef </p>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-4">
            <h2>3</h2>
            <p> 
              Mix the remaining ingredients (including the onions), and add to the meat. <br/> 
              Simmer for about 1.5 hours or until the meat is tender.
            </p>
          </div>
          <div class="col-md-4">
            <p> 130g Potatoes </p>
            <p> 130g Carrots </p>
            <p> .5tsp sticks of Cinnamon </p>
            <p> 1tsp Salt </p>
            <p> .5tsp Cardamom seeds </p>
            <p> 1tsp Cake Flour </p>
            <p> 1tsp Sugar </p>
            <p> 2tbsp Vinegar </p>
          </div>
        </div>
        <hr/>
        <div class="row">
          <div class="col-md-4">
            <h2>4</h2>
            <p> 
              Serve with beans, rice and chutney
            </p>
          </div>
          <div class="col-md-4">
            <p>Chutney</p>
            <p>Rice</p>
            <p> 1 can Beans (maybe more) </p>
          </div>
        </div>

        <hr/>

      </div> 

    </main>

    <footer class="container">
      <p>Website made with <span role="img" aria-label="burrito">🌯</span> by Wynand</p>
    </footer>
    </React.Fragment>);
  }
}

export default App;
