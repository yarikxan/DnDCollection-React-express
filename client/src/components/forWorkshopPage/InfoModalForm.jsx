import {useState} from "react";

import ProgressBar from './ProgressBar';
import Button from '../Button/Button';

const Input = ({label, id, type, onBlur, defaultValue}) => (
    <div style={{display: "flex", flexDirection: "column"}}>
        <input onBlur={onBlur} id={id} type="text" defaultValue={defaultValue} />
        <label style={{margin: "0 1rem"}} htmlFor={id}>{label}</label>
    </div>
);
//epxforLevels - массив со значениями опыта, необходимого для достижения i-го уровня
export default function InfoModalForm({card, setCard, expForLevels}) {
    const [expValue, setExpValue] = useState("");

    //Изменение данных карточки на стороне клиента без отправки новых данных на сервер
    const handleBlur = (event) => {
        setCard((prev) => ({...prev, [event.target.id]: event.target.value }));
    };

    //Изменения картинки "профиля" карточки. Здесь идет обращение к серверу, так как это наиболее удобное место для имзенения картинки
    const handlePicChange = async (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        console.log(formData.get('file'));
        
        try {
            const response = await fetch(`/api/uploadImg?cardId=${card._id}`, {
                method: "POST",
                body: formData,
            });

            if (response.status == 200) {
                const data = await response.json();
                setCard((prev) => ({...prev, imgIdURL: data.imgIdURL}));
            }
            else {
                const error = await response.json();
                console.log(error);
            }
        } catch(err) {
            console.log("File upload error", err);
        }
    };
    
    //Манипуляция данными об опыте персонажа на карточке
    const handleSubmit = (event, action) => {
        const newExp = parseInt(expValue);
        if (expValue == "" || isNaN(newExp)){ return }

        if(action == "add") {
            //Обработка крайних значний уровня персонажа еще будет дорабатываться
            if(card.level == "20") {return }
            if(newExp + card.exp >= expForLevels[card.level]){
                if(card.level == "19"){
                    setCard((prev) => ({...prev, level: 20}));
                } else {
                    setCard((prev) => ({
                        ...prev,
                        level: expForLevels.findIndex(exp => exp > (newExp + card.exp)),//Здесь происходит поиск нужного уровня после повышения в заранне созданном массиве с уровнями и опытом, необходимым для их достижения. Индекс = уровень, который досигается.
                    }));
                }
            }
            setCard((prev) => ({
                ...prev,
                exp: prev.exp + newExp,
            }));
        } else {
            if(card.exp - newExp <= 0) {
                setCard((prev) => ({
                    ...prev,
                    exp: 0,
                    level: 1,
                }));
            } else if( card.exp - newExp < expForLevels[card.level - 1] ){
                setCard((prev) => ({
                    ...prev,
                    exp : card.exp - newExp,
                    level: expForLevels.findIndex(exp => exp > (card.exp - newExp)),//Тот же принцип, что и ранее, но для понижения
                }));
            } else {
                setCard((prev) => ({
                    ...prev,
                    exp: card.exp - newExp,
                }));
            }
        }
    }


    return (
        <>
            <form>
                <label htmlFor="pic">Picture</label>
                <input onChange={handlePicChange} id="pic" type="file" accept="image/*"/>
            
                <Input onBlur={handleBlur} label="Name" id="name" defaultValue={card.name}/>

                <div style={{display: "flex", gap: "0.2rem"}}>
                    <Input onBlur={handleBlur} label="Race" id="race" defaultValue={card.race}/>

                    <Input onBlur={handleBlur} label="Class" id="class" defaultValue={card.class}/>
                </div>
                <div style={{display: "flex", gap: "0.2rem"}}>
                    <Input onBlur={handleBlur} label="Backstory" id="backstory" defaultValue={card.backstory}/>
                
                    <Input onBlur={handleBlur} label="Alignment" id="alignment" defaultValue={card.alignment}/>
                </div>
            </form>

            <form onSubmit={(event) => {event.preventDefault()}} style={{marginTop: "2rem"}}>
                <ProgressBar 
                    data={{barName: `Level ${card.level}`, 
                    barValue: `${card.exp}/${expForLevels[card.level]}`, 
                    progress: `${Math.round((card.exp - expForLevels[card.level - 1]) / (expForLevels[card.level] - expForLevels[card.level - 1]) * 100)}%`, 
                    borderColor: "#7c3aed", color: "#a78bfa"}} 
                /> 

                <label htmlFor="expBar">Manipulate exp</label>
                <input id="expBar" type="number" name="expBar" value={expValue} onChange={() => setExpValue(event.target.value)}/>

                <div style={{display: "flex", gap: "0.5rem", justifyContent: "center"}}>
                    <Button type="button" onClick={(event) => handleSubmit(event, "add")}>add</Button>
                    <Button type="button" onClick={(event) => handleSubmit(event, "remove")}>remove</Button>
                </div>
            </form>
        </>
    )

}


