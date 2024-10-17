import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

import './AuthPage.css';
import LoginBox from '../components/forAuthPage/LoginBox';
import RegisterBox from '../components/forAuthPage/RegisterBox';
import ResetBox from '../components/forAuthPage/ResetBox';


export default function AuthPage() {
    const location = useLocation();
    const box = location.state.box || "Login";
    const prevPage = location.state.prevPage;

    const navigate = useNavigate();
    const [currentBox, setCurrentBox] = useState(box);
    const [cookies, setCookie, removeCookie] = useCookies(['authorization']);

    useEffect(() => {
 
        const reqAuth = async (token) => {
            try {
                const response = await fetch('/api/verifyToken', {
                    method: "GET",
                    headers: {"authorization": `${token}`},
                    credentials : "include",
                });

                if (response.status == 200) {
                    const data = await response.json();
                    alert(`${data.username}, you already authorized`)
                    navigate('/');
                }
                else {
                    const error = await response.json();
                    console.log(error.error);
                }
            } catch (err) { alert(err);}
        }

        if (cookies.authorization) {
            reqAuth(cookies.authorization);
        }

    }, []);




    return(
        <main className="authMain">
            <section className="authBox">

                {currentBox == "Login" && <LoginBox goBack={() => navigate(prevPage)} changeBox={(to) => setCurrentBox(to)} />}
                {currentBox == "Register" && <RegisterBox goBack={() => navigate(prevPage)} changeBox={(to) => setCurrentBox(to)} />}
                {currentBox == "Reset" && <ResetBox goBack={() => navigate(prevPage)} changeBox={(to) => setCurrentBox(to)} />}
            
            </section>
        </main>
    )
	
}
