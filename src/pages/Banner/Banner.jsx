import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="position-relative">
        <img
          className="w-100 h-auto rounded"
          src="https://png.pngtree.com/background/20210710/original/pngtree-pizza-simple-black-banner-picture-image_992078.jpg"
          alt="photo"
        />
        <div className="position-absolute top-50 start-50 translate-middle-y text-info text-center">
          <h2>
            Find Our Best Chef
            <br />
            And test their fabulous recipes
          </h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
