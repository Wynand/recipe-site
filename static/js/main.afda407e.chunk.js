(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){},17:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(2),o=t.n(r),u=(t(15),t(3)),m=t(4),s=t(7),l=t(5),c=t(8);function d(n){var e=n.recipe,t=1;return i.a.createElement("main",{role:"main"},i.a.createElement("div",{className:"jumbotron"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-3"},e.title),i.a.createElement("p",null,e.description))),i.a.createElement("div",{className:"container"},e.steps.map(function(n){return i.a.createElement(i.a.Fragment,{key:n.instruction},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("h2",null,t++),i.a.createElement("p",null,n.instruction)),i.a.createElement("div",{className:"col-md-4"},n.ingredients.map(function(n){return i.a.createElement("p",{key:n.name},n.amount+" "+n.unit+" "+n.name)}))),i.a.createElement("hr",null))})))}t(17);var p=t(6),g=function(n){function e(n){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(l.a)(e).call(this,n))).state={},t}return Object(c.a)(e,n),Object(m.a)(e,[{key:"render",value:function(){var n=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar navbar-default",role:"navigation"},i.a.createElement("div",{className:"navbar-header"},"Wynand's Recipe Site"),i.a.createElement("div",null,p.map(function(e){return i.a.createElement("p",{key:e.title,className:"navbar-text navbar-left"},i.a.createElement("button",{className:"navbar-link",onClick:function(){return n.setState({currRecipe:e})}},e.title))}))),void 0!==this.state.currRecipe?i.a.createElement(d,{recipe:this.state.currRecipe}):"Select a recipe!",i.a.createElement("footer",{className:"container"},i.a.createElement("p",null,"Website made with ",i.a.createElement("span",{role:"img","aria-label":"burrito"},"\ud83c\udf2f")," by Wynand")))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},6:function(n){n.exports=[{title:"Curry and Rice",description:"Recipe for somewhat traditional Curry (ied beef) and Rice recipe modified by my mom and I",steps:[{instruction:"Braise the onions and spices in hot oil.\n Remove half the onions from the pan and set aside.",ingredients:[{name:"Onion",amount:1,unit:""},{name:"Garlic Clove",amount:1.5,unit:"g"},{name:"Ginger",amount:1,unit:"tsp"},{name:"Oil",amount:2,unit:"tsp"},{name:"Curry",amount:.5,unit:"tbsp"},{name:"Coriander",amount:1,unit:"tbsp"},{name:"Turmuric",amount:.5,unit:"tsp"},{name:"Cumin",amount:.5,unit:"tsp"},{name:"Pepper",amount:.25,unit:"tsp"}]},{instruction:"Add the meat, stir and simmer slowly until brown.\nAdd enough hot water so it comes 2.5cm up the sides of the sauce pan.",ingredients:[{name:"Ground Beef",amount:670,unit:"g"}]},{instruction:"Mix the remaining ingredients (including the onions), and add to the meat.\nSimmer for about 1.5 hours or until the meat is tender.",ingredients:[{name:"Potatoes",amount:130,unit:"g"},{name:"Carrots",amount:130,unit:"g"},{name:"Cinnamon",amount:.5,unit:"tsp"},{name:"Salt",amount:1,unit:"tsp"},{name:"Cardamom Seeds",amount:.5,unit:"tsp"},{name:"Cake Flour",amount:1,unit:"tsp"},{name:"Sugar",amount:1,unit:"tsp"},{name:"Vinegar",amount:2,unit:"tbsp"}]},{instruction:"Serve with Rice and Chutney",ingredients:[]}]},{title:"Boysonberry Chicken",description:"Moerby Hoender in Afrikaans - A traditional recipe which my dad makes, and I'm trying to reproduce",steps:[{instruction:"Roast onion with curry, pepper, ginger, sugar",ingredients:[{name:"Onion",amount:"1",unit:""},{name:"oil",amount:"1",unit:"tbsp"},{name:"curry",amount:"0.5",unit:"tbsp"},{name:"pepper",amount:"0.25",unit:"tsp"},{name:"ginger",amount:"1",unit:"tsp"},{name:"sugar",amount:"1",unit:"tbsp"}]},{instruction:"Brown chicken with onions",ingredients:[{name:"Chicken",amount:"6",unit:"drumsticks"}]},{instruction:"Add bbq sauce, lemon juice, vinegar, potatoes, and stew on low until potatoes are soft",ingredients:[{name:"bbq sauce",amount:"",unit:""},{name:"vinegar",amount:"1",unit:"tbsp"},{name:"lemon juice",amount:"1",unit:"tbsp"},{name:"soy sauce",amount:"1",unit:"tbsp"},{name:"onion soup",amount:"1",unit:"pack"},{name:"salt",amount:"1",unit:"tsp"}]}]},{title:"Milk Tart",description:"My favorite dessert growing up - a cinnamony custardy sweet treat.  Can be served hot but my best memories are eating this at room temperature",steps:[{instruction:"Bake pie shell to completion.  For best results, put dry rice or beans in wax paper in pie shell to stop the shell from bubbling",ingredients:[{name:"Pie Shells",amount:"2",unit:' 9"'}]},{instruction:"Mix flour or corn starch (only one is needed) with sugar and salt, then mix in eggs",ingredients:[{name:"Flour",amount:"1/2",unit:"cup"},{name:"Corn Starch",amount:"1/4",unit:"cup"},{name:"Sugar",amount:"1/2",unit:"cup"},{name:"Salt",amount:"1/4",unit:"tsp"},{name:"Eggs",amount:"4",unit:""}]},{instruction:"Mix milk and sugar, heat milk until bubbling",ingredients:[{name:"Milk",amount:"1",unit:"litre"},{name:"Sugar",amount:"1/2",unit:"cup"},{name:"Salt",amount:"1/4",unit:"tsp"},{name:"Eggs",amount:"4",unit:""}]},{instruction:"Add small amounts of milk mixture to egg mixture and mix, to temper eggs.  Repeat until mix is hot (using 1/3 to 1/2 of the milk)",ingredients:[{name:"Milk mixture",amount:"",unit:""},{name:"Egg mixture",amount:"",unit:""}]},{instruction:"Add vanilla to egg mixture then pour egg mixture into milk mixture. Heat until bubbling (about 1 minute)",ingredients:[{name:"Milk mixture",amount:"",unit:""},{name:"Egg mixture",amount:"",unit:""},{name:"Vanilla Extract",amount:"5",unit:"mL"}]},{instruction:"Pour finished filling into pie shells, sprinkle with cinnamon",ingredients:[{name:"Milk/Egg filling",amount:"",unit:""},{name:"Baked Pie Shell",amount:"1",unit:""},{name:"Cinnamon",amount:"",unit:""}]}]}]},9:function(n,e,t){n.exports=t(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.afda407e.chunk.js.map