import {useState} from "react";
import {Link} from "react-router-dom";

import classes from './Header.module.css';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export default function Header({user, logOut, nav}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => { setModalOpen(true)}

    const logOutAndCloseModal = () => {
        logOut();
        setModalOpen(false);
    }

    return(
        <>
            <header className={classes.mainHeader}>
                <h1>gmprikol</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Collection">Collection</a></li>
                        <li><a href="/play">Play</a></li>
                    </ul>
                </nav>

                <Modal close={() => setModalOpen(false)} open={isModalOpen} className={classes.headerModal}>
                    <div>
                        <p> {user.userData.username} </p>
                        <Link>dsafdsafdsa</Link>
                        <Link>safdsafdsfas</Link>
                        <Button onClick={logOutAndCloseModal}>Log out </Button>
                    </div>
                </Modal>


                {user.isAuth === null? null : user.isAuth ? <Button className={classes.userButton} onClick = {() => setModalOpen(true)}>{user.userData.username || "User"}</Button> :
                                                            <div>
                                                                <Button onClick={() => nav('/auth', "Login") } >Login</Button>
                                                                <Button onClick={() => nav('/auth', "Register") } >Register</Button>
                                                            </div> 
                    
                }
                

            </header>
        </>
    )
}
