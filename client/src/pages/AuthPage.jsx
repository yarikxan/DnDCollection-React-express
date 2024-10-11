import {useState, useEffect} from "react"
import {useLocation} from 'react-router-dom'

import './AuthPage.css'
import LoginBox from '../components/forAuthPage/LoginBox'
import RegisterBox from '../components/forAuthPage/RegisterBox'
import ResetBox from '../components/forAuthPage/ResetBox'

export default function AuthPage() {
    const location = useLocation();
    const box = location.state.box || "Login";

    const [currentBox, setCurrentBox] = useState(box);

    return(
        <main className="authMain">
            <section className="authBox">

                {currentBox == "Login" && <LoginBox changeBox={(to) => setCurrentBox(to)} />}
                {currentBox == "Register" && <RegisterBox changeBox={(to) => setCurrentBox(to)} />}
                {currentBox == "Reset" && <ResetBox changeBox={(to) => setCurrentBox(to)} />}
            
            </section>
        </main>
    )
	
}
