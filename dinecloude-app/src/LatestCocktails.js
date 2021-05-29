import React, { useState, useEffect } from 'react'
import axios from 'axios'

function LatestCocktails() {
    //set state variables
    const [data, setData] = useState([])

    //create our effect to fetch the data from the endpoint,useEffect accepts arrow function, within the function will empliment the URL

    useEffect(
        () => {

            const options = {
                method: 'GET',
                url: 'https://the-cocktail-db.p.rapidapi.com/latest.php',
                headers: {
                    'x-rapidapi-key': 'acsh3afe4af5d6decbbp137933jsn3fc1a1490dd7',
                    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data.drinks);
                setData(response.data.drinks)
            }).catch(function (error) {
                console.error(error);
            });


          
        }, []
    )
    return (
        //render a list of posts on the browser, will creat ul.
        <div>
            <ul>
                {

                    // posts?.meals?.map(post => <li key={post.id}><a href={post.sourceUrl}>Visit W3Schools.com!</a> </li>

                    // )
                    data?.map(data => <li key={data.strDrink}>{data.strDrink }<a href={data.strDrinkThumb}>{data.strInstructions}</a> </li>

                    )
                }
            </ul>




        </div>
    )
}


export default LatestCocktails

