import './Header.css';
import Button from '../Button/Button'
import {useNavigate} from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();

    return(
        <>
            <header className="mainHeader">
                <h1>gmprikol</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Collection">Collection</a></li>
                        <li><a href="/play">Play</a></li>
                    </ul>
                </nav>

                <div>
                    <Button onClick={() => navigate('/auth', {state: {box: "Login"}}) } >Login</Button>
                    <Button onClick={() => navigate('/auth', {state: {box: "Register"}}) } >Register</Button>
                </div>
            </header>
        </>
    )
}
