import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CocktailsEngredients() {
    //set state variables
    const [data, setData] = useState([])

    //create our effect to fetch the data from the endpoint,useEffect accepts arrow function, within the function will empliment the URL

    useEffect(
        () => {

            const options = {
                method: 'GET',
                url: 'https://the-cocktail-db.p.rapidapi.com/list.php',
                params: { i: 'list' },
                headers: {
                    'x-rapidapi-key': 'ac28f94365msh3afe4af5d6decbbp137933jsn3fc1a1490dd7',
                    'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                console.log(response.data);
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
                    data?.map(data => <li key={data.strIngredient1}>{data.strIngredient1} </li>

                    )
                }
            </ul>




        </div>
    )
}


export default CocktailsEngredients

