import React, { Component } from 'react'
import './App.css';

class Recipes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            results: [],
            objectId: null,
        }
        this.handleSearching = this.handleSearching.bind(this)
        this.handleChange = this.handleChange.bind(this)
       // this.handleIngr = this.handleIngr.bind(this,rId)
        this.idUpdate = this.idUpdate.bind(this)
    }




    // search: search recipes/
    handleSearching(event) {
        event.preventDefault()
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" + this.state.search, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "acsh3afe4af5d6decbbp137933jsn3fc1a1490dd7",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then((data) => data.json())
            .then(response => {
                this.setState({ results: response.results })


            })
            .catch(err => {
                console.error(err);
            });

    }








    handleIngr(rId, event) {
        event.preventDefault()
        this.setState({ objectId: event.target.id })

        console.log('recipe id=' + rId)
        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/{rId}/ingredientWidget.json`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ac28f94365msh3afe4af5d6decbbp137933jsn3fc1a1490dd7",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
            .then((data) => data.json())
            .then(response => {
                this.setState({ ingredients: response.ingredients })
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
        console.log('objectis'+this.state.objectId)
    }



    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(this.state.search)
    }



    idUpdate(event) {
        this.setState({ objectId: event.currentTarget.id })
    }


    render() {
        console.log(this.state.results)
        return (
            <div className="recipeContent">


                <form onSubmit={this.handleSearching}>
                    <label>
                        <input text="text" placeholder="search recipes" onChange={this.handleChange} value={this.state.search} name='search' />
                    </label>
                    <button className="search!">Search</button>
                </form>




                <div className='recipeReturn'>
                    {this.state.results.map((val) => {
                        const rId = val.id;
                        return (

                         


                            <div >
                                {val.title}
                             
                                <a href={val.sourceUrl}>Go To Dish Recipe</a>
                                <button className="showRecipe" key={val.id} onClick={this.handleIngr.bind(this,rId)} value={rId} name="rId"></button> <br />


                                    Ready in: {val.readyInMinutes} minutes <br />
                                    Servings: {val.servings}

                            </div>


                           
                        )
                    })
                    }

                </div>


            </div>

        )
    }
}
export default Recipes
