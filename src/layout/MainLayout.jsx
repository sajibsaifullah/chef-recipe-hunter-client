import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';
import Spinner from 'react-bootstrap/Spinner';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div className='text-center'>{navigation.state === 'loading' && <>{<Spinner animation="grow" />}</>}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;