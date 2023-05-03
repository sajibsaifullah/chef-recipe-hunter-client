import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Chef = () => {
  const chefs = useLoaderData([]);
  // console.log(chefs)
  return (
    <div className="mt-3">
      <h3 className="text-center">Our Chefs</h3>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chef;
