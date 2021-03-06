import React from "react";

export default function Recipe(props){

    let recipe = props.recipe
    let i = 1;

    return (<main role="main">

    {/*<-- Main jumbotron for a primary marketing message or call to action -->*/}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">{recipe.title}</h1>
        <p>{recipe.description}</p>
      </div>
    </div>

    <div className="container">
      {/*<!-- Example row of columns -->*/}
        {recipe.steps.map(step=><React.Fragment key = {step.instruction}>
            <div className = "row">
                <div className = "col-md-4">
                    <h2>{i++}</h2>
                    <p>{step.instruction}</p>
                </div>
                <div className = "col-md-4">
                    {step.ingredients.map(ingredient=><p key={ingredient.name}>
                        {ingredient.amount + " " + ingredient.unit + " " + ingredient.name}
                    </p>)}
                </div>
            </div>
            <hr/>
        </React.Fragment>)}
    </div> 

  </main>);
}