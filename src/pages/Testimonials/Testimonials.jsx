import React from "react";
import Carousel from "react-bootstrap/Carousel";
import foodImg from '../../assets/food.jpg'
import { Image } from "react-bootstrap";

const Testimonials = () => {
  return (
    <Carousel className="my-4">
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-25"
          src={foodImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="text-black fw-bold">Client Testimonials</h2>
          <p className="text-black fw-bold">I just wanted to thank you for making a really great breakfast cereal! Your muesli (particularly the liver cleansing one)...</p>
          <Image className="w-25" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png" roundedCircle />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-25"
          src={foodImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="text-black fw-bold">Client Testimonials</h2>
          <p className="text-black fw-bold">I just wanted to thank you for making a really great breakfast cereal! Your muesli (particularly the liver cleansing one)...</p>
          <Image className="w-25" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png" roundedCircle />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 opacity-25"
          src={foodImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="text-black fw-bold">Client Testimonials</h2>
          <p className="text-black fw-bold">I just wanted to thank you for making a really great breakfast cereal! Your muesli (particularly the liver cleansing one)...</p>
          <Image className="w-25" src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png" roundedCircle />
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
  );
};

export default Testimonials;
