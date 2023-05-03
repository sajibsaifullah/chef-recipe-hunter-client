import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className='mt-3'>
            <Banner></Banner>
        </Container>
    );
};

export default Home;