import './App.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (


        <nav className='navBar'>
         
            <ul className='Nav-links'>

                <Link to='/Dine'>
                    <li>Dine</li>
                </Link>

                <Link to='/Kitchen'>
                    <li>Random Dish for Today</li>
                </Link>

                <Link to='/Recipes'>
                    <li>Search Dish Recipes </li>
                </Link>

               

                <Link to='/LatestCocktails'>
                    <li>List of most latest Cocktails</li>
                </Link>

                <Link to='/PopularCocktails'>
                    <li>List of Popular Cocktails</li>
                </Link>

                <Link to='/CocktailsEngredients'>
                    <li>Cocktails Ingredients</li>
                </Link>

                
              
               
              

              

            </ul>
        </nav>


    )
}
export default Nav;