import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function Kitchen() {
    //set state variables
    const [posts, setPosts] = useState([])

    //create our effect to fetch the data from the endpoint,useEffect accepts arrow function, within the function will empliment the URL

    useEffect(
        () => {


            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
                params: {
                    timeFrame: 'day',
                    targetCalories: '2000',
                    diet: 'vegetarian',
                    exclude: 'shellfish, olives'
                },
                headers: {
                    'x-rapidapi-key': 'ac2865msh3afe4af5d6decbbp137933jsn3fc1a1490dd7',
                    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
                setPosts(response.data)
            }).catch(function (error) {
                console.error(error);
            });
            console.log('test')
        }, []
    )
    return (
        //render a list of posts on the browser, will creat ul.
        <div>
            <ul>
                {

                    // posts?.meals?.map(post => <li key={post.id}><a href={post.sourceUrl}>Visit W3Schools.com!</a> </li>

                    // )
                    posts?.meals?.map(post => <li key={post.id}><a href={post.sourceUrl}>{post.title}</a> </li>

                    )
                }
            </ul>




        </div>
    )
}

export default Kitchen

