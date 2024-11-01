import {useState} from "react";

import classes from './Skill.module.css';

export default function Skill({skill, card, setCard, throwModifier, stats, statIdx}) {
    const skills = [...card.stats[statIdx].skills];
    const skillIdx = skills.findIndex((oldSkill) => oldSkill.name == skill.name);

    // 0 - unchecked 1 - intermediate 2 - checked
    const [checkState, setCheckState] = useState(skills[skillIdx].value);
    const dotColors = ["inherit", "white", "#5B21B6"];

    const checkModifier = (Math.ceil(card.level / 4) + 1) * checkState;


    const handleCheck = () => {
        setCheckState((prev) => {
            const newValue = (prev + 1) % 3;
            skills[skillIdx] = {...skills[skillIdx], value: newValue };
            stats[statIdx].skills = [...skills];

            return newValue;
        });

        setCard((prev) => ({
            ...prev,
            stats: stats,
        }));
    }

    return (
        <div className={classes.container}>
            <button onClick={handleCheck} > <span style={{backgroundColor: dotColors[checkState]}}></span>  </button>
            <p className={classes.name}>{skill.name}</p>
            <p className={classes.modifier}>{`${throwModifier + checkModifier >= 0? '+' : '-'}${Math.abs(throwModifier + checkModifier)}`}</p>
        </div>
    )
}
