import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-5">
      <div>
        <h5>
          Q1: Tell us the differences between uncontrolled and controlled
          components.
        </h5>
        <p className="ms-2">
          Controlled components are managed and controlled by a central
          authority or framework and are subject to strict rules and standards,
          while uncontrolled components are not managed or controlled by a
          central authority and are more flexible and adaptable.
        </p>
      </div>
      <div>
        <h5>Q2: How to validate React props using PropTypes?</h5>
        <p className="ms-2">
          In React, PropTypes is a way to specify the type and shape of the
          props that a component should receive. It provides a simple way to
          validate that the props being passed to a component are of the correct
          type and have the expected structure.
        </p>
      </div>
      <div>
        <h5>Q3: Tell us the difference between nodejs and express js.</h5>
        <p className="ms-2">
          Node.js is a JavaScript runtime environment for server-side scripting,
          while Express.js is a framework built on top of Node.js that
          simplifies the process of building web applications and APIs.
          Express.js provides additional functionality, such as routing and
          middleware, that Node.js does not provide out of the box.
        </p>
      </div>
      <div>
        <h5>
          Q4: What is a custom hook, and why will you create a custom hook?
        </h5>
        <p className="ms-2">
          A custom hook in React is a reusable function that allows you to
          abstract away complex logic and share it across multiple components.
          It helps you separate concerns, reduce duplication, and simplify your
          codebase.
        </p>
      </div>
    </Container>
  );
};

export default Blog;
