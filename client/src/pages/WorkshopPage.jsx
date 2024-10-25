import {useState, useEffect} from "react";
import {useCookies} from "react-cookie";
import {useNavigate, useParams} from "react-router-dom";

import classes from './WorkshopPage.module.css';
import Header from  '../components/Header/Header';
import Main from '../components/forWorkshopPage/Main';

export default function WorkshopPage({user, logOut}){
    const {id} = useParams();
    const [card, setCard] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getCard = async () => {
            //Trying to find a card from params.id
            try {
                const response = await fetch(`/api/getCard?id=${id}`);

                if (response.status == 200) {
                    const data = await response.json();
                    setCard(data.card);
                    setLoading(false);

                // if there's no card -> making a new one instead
                } else {
                    try{
                        const response = await fetch('/api/createCard');
                        if (response.status == 200) {
                            const data = await response.json();
                            navigate(`/workshop/${data.card._id}`)
                        } else {
                           navigate('/ServerErrorPage'); 
                        }
                    } catch (error) {
                        console.log(error);
                        navigate('ServerErrorPage');                        
                    }
                }
            }  catch (error) {
                console.log(error);
                navigate('/ServerErrorPage');
            }
        }
        getCard();

    }, []);


    return (
        <div className="wrapper">
            <Header user={user} logOut={logOut} nav={(to, toBox) => navigate(to, {state: {box: toBox, prevPage: "/workshop"}})} />
            {loading? <h1 style={{color: "white"}}>Loading...</h1>:<Main card={card} setCard={setCard} /> }
        </div>
    )
}
