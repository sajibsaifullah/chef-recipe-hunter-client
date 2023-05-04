import React from "react";
import { Image } from "react-bootstrap";
import foodImg from "../../assets/food.jpg";
import SingleRecipe from "./SingleRecipe";

const RecipeDetails = ({ data }) => {
  const chefId = localStorage.getItem("chefId");
  return (
    <div className="container">
      {data.id == chefId && (
        <div>
          <div className="position-relative">
            <img
              className="w-100 opacity-25 "
              src={foodImg}
              alt=""
            />
            <div className="position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center gap-4">
              <Image className="w-25" src={data.chefPicture} roundedCircle />
              <div className="fw-bold">
                <h2>{data.chefName}</h2>
                <p className="m-0">{data.shortBio}</p>
                <p className="m-0">Experience: {data.yearsOfExperience} year</p>
                <p className="m-0">Number of Recipes: {data.numberOfRecipes}</p>
                <p>Likes: {data.likes}</p>
              </div>
            </div>
          </div>
          <h3 className="text-center mt-4">Chef Recipes</h3>
          <div className="row row-cols-1 row-cols-lg-3 g-4 mt-2">
            {data.recipes.map((singleRecipe) => (
              <SingleRecipe
                key={singleRecipe.recipeId}
                singleRecipe={singleRecipe}
              ></SingleRecipe>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
