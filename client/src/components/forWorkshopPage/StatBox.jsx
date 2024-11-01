import {useState} from "react";

import classes from './StatBox.module.css';
import Skill from './Skill';


export default function StatBox({card, setCard, stat}) {
    const [statValue, setStatValue] = useState(stat.value);
    const [saveValue, setSaveValue] = useState(stat.save);

    const throwModifier = Math.floor((statValue - 10) / 2);
    const checkboxModifier = Math.ceil((card.level / 4 + 1) * saveValue);
    
    const stats = [...card.stats];
    const statIdx = stats.findIndex((oldStat) => oldStat.name == stat.name);

    const handleCheck = (event) => {
        console.log(saveValue);
        setSaveValue((prev) => {
            stats[statIdx] = {...stats[statIdx], save: !prev}; 
            return !prev;
        });

        setCard((prev) => ({
            ...prev,
            stats: stats,
        }));
        
    };

    const handleChange = (event) => {
        setStatValue(event.target.value < 0? 0 : (event.target.value > 30?  30: event.target.value));
    };
    const handleBlur = (event) => {
        stats[statIdx] = {name: stat.name, value: statValue, save: stat.save, skills: stat.skills};

        setCard((prev) => ({
            ...prev,
            stats: stats,
        }));
    };

    return (
        <div>
            <section style={{display: "flex"}}>
                <div className={classes.stat}>
                    <input onChange={handleChange} onBlur={handleBlur} type="number" value={statValue}/>
                    <h2>{stat.name}</h2>
                </div>

                <div className={classes.modifiers}>
                    <div style={{display: "flex", gap: "0.3rem"}}>
                        <p className={classes.throw}>Check</p>
                        <p className={classes.modifier}>{`${ throwModifier >= 0? '+' : '-'}${Math.abs(throwModifier)}`}</p>
                    </div>

                    <div style={{display: "flex", gap: "0.3rem", alignItems: "center"}}>
                        <button className={classes.checkbox} onClick={handleCheck}> <span style={saveValue? {backgroundColor: "white"} : {}}/></button>
                        <p className={classes.throw}>Save</p>
                        <p className={classes.modifier}>
                        {`${ throwModifier + checkboxModifier >= 0? '+' : '-'}${Math.abs(throwModifier + checkboxModifier)}`}
                        </p>
                    </div>
                </div>
            </section>

            <section style={{display: "flex", flexDirection: "column", borderTop: "1px solid #6366f133"}}>
                {stat.skills.map((skill) => (
                    <Skill key={skill.name} skill={skill} card={card} setCard={setCard} throwModifier={throwModifier} stats={stats} statIdx={statIdx}/>
                ))}
            </section>    
        </div>
    )
}
