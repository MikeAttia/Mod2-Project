import './App.css';

import Dine from './Dine'
import Kitchen from './Kitchen';

import LatestCocktails from './LatestCocktails';
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PopularCocktails from './PopularCocktails';
import CocktailsEngredients from './CocktailsEngredients';
//import Recipe from './Recipe';
import Recipes from './Recipes';






function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Dine} />
          <Route path='/Dine' component={Dine} />
          <Route path='/Kitchen' component={Kitchen} />
          
          <Route path='/LatestCocktails' component={LatestCocktails} />
          <Route path='/PopularCocktails' component={PopularCocktails} />
          <Route path='/CocktailsEngredients' component={CocktailsEngredients} />
          
          <Route path='/Recipes' component={Recipes} />
         
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;