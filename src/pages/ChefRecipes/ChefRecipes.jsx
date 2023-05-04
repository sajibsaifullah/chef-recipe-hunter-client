import React from 'react';
import { useLoaderData, useParams } from "react-router-dom"
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const ChefRecipes = () => {
    const chef = useLoaderData([]);
    // console.log(chef)
    return (
        <div>
            {
                chef.map(data => <RecipeDetails
                key={data.id}
                data={data}
                ></RecipeDetails>)
            }
        </div>
    );
};

export default ChefRecipes;