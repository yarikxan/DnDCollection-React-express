import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useState, useEffect} from "react";


import Header from '../components/Header/Header';
import Banner from '../components/forMainPage/Banner';
import Footer from '../components/Footer/Footer';
import Main from '../components/forMainPage/Main';
import classes from './MainPage.module.css';

export default function MainPage({user, logOut}) {
    const navigate = useNavigate();

    return (
        <div className={classes.wrapper}>
            <Header user={user} logOut={logOut} nav={(to, toBox) => navigate(to, {state: {box: toBox, prevPage: "/",}})} />
            <Banner />
            <Main/>
            <Footer />
        </div>
    )
}

