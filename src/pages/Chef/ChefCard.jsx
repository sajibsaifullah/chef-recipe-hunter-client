import React from "react";
import { Button } from "react-bootstrap";

const ChefCard = ({chef}) => {
    console.log(chef);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={chef.chefPicture} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{chef.chefName}</h5>
          <p className="card-tex m-0">Years of experience: {chef.yearsOfExperience}</p>
          <p className="card-text m-0">Numbers of recipes: {chef.numberOfRecipes}</p>
          <p className="card-text">Likes: {chef.likes}</p>
        </div>
        <Button variant="primary">View Recipes</Button>
      </div>
    </div>
  );
};

export default ChefCard;
