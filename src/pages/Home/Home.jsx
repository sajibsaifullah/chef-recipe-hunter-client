import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from "react-bootstrap";
import Chef from '../Chef/Chef';
import Cuisine from '../Cuisine/Cuisine';

const Home = () => {
    return (
        <Container className='mt-3'>
            <Banner></Banner>
            <Chef></Chef>
            <Cuisine></Cuisine>
        </Container>
    );
};

export default Home;