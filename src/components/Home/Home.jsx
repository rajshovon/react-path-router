import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>

            <div>{
                navigation.state === 'loading' ? <Spinner></Spinner> : ''
            }</div>
            <Outlet />
        </div>
    );
};

export default Home;