import {useState} from "react";

import Button from '../Button/Button';

const Input = ({label, id, type, onBlur, defaultValue}) => (
    <div style={{display: "flex", flexDirection: "column"}}>
        <input onBlur={onBlur} id={id} type={type} defaultValue={defaultValue} />
        <label style={{margin: "0 1rem"}} htmlFor={id}>{label}</label>
    </div>
);


export default function RightTabModal({card, setCard}) {
    const [option, setOption] = useState("1");
    const [gold, setGold] = useState(0);

    const handleGold = (event, action) => {
        const mod = parseFloat(option);
        const goldValue = parseInt(gold);

        console.log(card.gold - goldValue);

        if(action == "add"){
            setCard((prev) => ({
                ...prev,
                gold: prev.gold + ( goldValue * mod ), 
            }));
        } else {
            if(card.gold - goldValue < 0) { setCard((prev) => ({...prev, gold: 0})) }
            else {
                setCard((prev) => ({
                    ...prev,
                    gold: prev.gold - (goldValue * mod),
                }));
            }
        }
    };

    const handleBlur = (event) => {
        setCard((prev) => ({...prev, [event.target.id]: event.target.value }));
    }; 

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <select 
                    style={{ border: "2px solid #6b21a8", borderRadius: "0.5rem", padding: "0.1rem", color: "white", fontWeight: "700"}}
                    onChange={(event) => setOption(event.target.value)}
                    value={option}
                >
                    <option style={{backgroundColor: "#171717"}} value="1">Gold</option>
                    <option style={{backgroundColor: "#171717"}} value="0.1">Silver</option>
                    <option style={{backgroundColor: "#171717"}} value="0.01">Copper</option>
                </select>
                
                <input onChange={(event) => setGold(event.target.value)} value={gold} id="gold" type="number" /> 
                <Button type="button" onClick={(event) => handleGold(event, "add")}>add</Button>
                <Button type="button" onClick={(event) => handleGold(event, "remove")}>remove</Button>
            </form>

            <form style={{margin: "2rem 0"}}>
                <Input onBlur={handleBlur} label="Hit dice" id="hitDices" type="text" />

                <div style={{display: "flex", gap: "0.2rem"}}>
                    <Input onBlur={handleBlur} label="Current hits" id="hits" type="number" />
                    <Input onBlur={handleBlur} label="Max hits" id="maxHits" type="number" />
                </div>
            
                <Input onBlur={handleBlur} label="Temporary hits" id="tempHits" type="number" />
            </form>
        </>
    )
}
