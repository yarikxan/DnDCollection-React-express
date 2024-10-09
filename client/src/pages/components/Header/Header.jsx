import './Header.css';
import Button from '../Button/Button'

export default function Header() {

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
                    <Button text={"Login"} />
                    <Button text={"Register"}/>
                </div>
            </header>
        </>
    )
}
