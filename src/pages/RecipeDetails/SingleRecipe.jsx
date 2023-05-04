import React from 'react';
import { Button } from 'react-bootstrap';

const SingleRecipe = ({singleRecipe}) => {
    return (
        <div className="col">
      <div className="card h-100">
        <img src={singleRecipe.picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold text-danger fs-4 text-center">{singleRecipe.recipeName}</h5>
          <p className="card-tex m-0"><span className='fw-bold'>Ingredients:</span> {
          singleRecipe.ingredients.map((r, idx) => <li key={idx} className='m-0' >{r}</li>)
          }</p>
          <p className="card-tex m-0"><span className='fw-bold'>Cooking Method:</span> {
          singleRecipe.cookingMethod.map((cm, idx) => <li key={idx} className='m-0' >{cm}</li>)
          }</p>
          <p className="card-text"><span className='fw-bold'>Rating:</span> {singleRecipe.rating}</p>
        </div>
        <Button variant="primary">Favorite</Button>
      </div>
    </div>
    );
};

export default SingleRecipe;