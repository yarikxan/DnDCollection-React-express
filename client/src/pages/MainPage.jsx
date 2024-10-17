import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {useState, useEffect} from "react";


import Header from '../components/Header/Header';
import Banner from '../components/forMainPage/Banner';
import Footer from '../components/Footer/Footer';
import Main from '../components/forMainPage/Main';
import './MainPage.css';

export default function MainPage() {
    const [user, setUser] = useState({ isAuth: null , userData: {}});
    const [cookies, setCookie, removeCookie] = useCookies(['authorization']);

    const navigate = useNavigate();

    useEffect(() => {
        const authTokenValidator = async (token) => {
            try {
                const response = await fetch('/api/verifyToken', {
                    method: "GET",
                    headers: {"authorization" : `${token}`},
                    credentials: "include",
                });

                if (response.status == 200) {
                    const data = await response.json();
                    setUser((prev) => ({
                        ...prev,
                        isAuth: true,
                        userData : data,
                    }));
                } else {
                    const error = await response.json();
                    setUser((prev) => ({
                        ...prev,
                        isAuth: false,
                    }))
                    console.log(error.error);
                }

            } catch (err) {
                console.log(err)
            }
        }

        if (cookies.authorization) {
            authTokenValidator(cookies.authorization);
        } else {
            setUser((prev) => ({...prev, isAuth: false}));
        }

    }, []);

    const logOut = () => {
        removeCookie('authorization', {path: '/'});
        setUser((prev) => ({...prev, isAuth: false}));
    }

    return (
        <div className="wrapper">
            <Header user={user} logOut={logOut} nav={(to, toBox) => navigate(to, {state: {box: toBox, prevPage: "/",}})} />
            <Banner />
            <Main/>
            <Footer />
        </div>
    )
}

