import {useState, useEffect} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

import Main from '../components/forCollectionPage/Main';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import classes from './CollectionPage.module.css';

export default function CollectionPage({user, logOut}) {
    const navigate = useNavigate();
    
    return (
        <div className={classes.wrapper}>
            <Header user={user} logOut={logOut} nav={(to, toBox) => navigate(to, {state: {box: toBox, prevPage: "/collection",}})} />
            <Main nav={(to) => navigate(to, {prevPage: "/collection"})}/>
            <Footer />
        </div>

    )
}
