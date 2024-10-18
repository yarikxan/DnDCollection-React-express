import {Routes, Route, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {useCookies} from "react-cookie";

import './App.css';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import CollectionPage from './pages/CollectionPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
    const [user, setUser] = useState({ isAuth: null , userData: {}});
    const [cookies, setCookie, removeCookie] = useCookies(['authorization']);

    useEffect(() => {
        const authTokenValidator = async (token) => {
            try {
                const response = await fetch('/api/verifyToken', {
                    method:"GET",
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
    <>
      <Routes>
        <Route path="/" element={<MainPage user={user} logOut={logOut} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/collection" element={<CollectionPage user={user} logOut={logOut} />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
