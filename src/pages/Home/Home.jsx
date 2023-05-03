import React from 'react';
import Banner from '../Banner/Banner';
import { Container } from "react-bootstrap";
import Chef from '../Chef/Chef';

const Home = () => {
    return (
        <Container className='mt-3'>
            <Banner></Banner>
            <Chef></Chef>
        </Container>
    );
};

export default Home;