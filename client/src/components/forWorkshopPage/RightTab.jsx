import {useState} from "react";

import classes from './RightTab.module.css';
import Button from '../Button/Button';

const Weapon= ({name, bonus, damage, description}) => (
    <div className={classes.weapon}>
        <Button>{name}</Button>
        <Button>{bonus}</Button>
        <Button>{damage}</Button>
        <Button>Remove</Button>
    </div>
);

const Spell = ({name, duration, range, components, effect}) => (
    <div className={classes.spell}>
        <p>{name}</p>
        <div>
            <p>{duration}</p>
            <p>{range}</p>
            <p>{components}</p>
            <p>{effect}</p>
        </div>
    </div>
);

export default function RightTab({tab, card, setCard}) {
    const [weapons, setWeapons] = useState([]);
    const [spells, setSpells] = useState([]);

    const handleBlur = () => {
        setCard((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    }

    const addClickHandle = () => {
        setWeapons((prev) => [...prev, {name: "set", bonus: "+0", damage: "0d0"}]);
    }
    const addSpellClickHandle = () => {
        setSpells((prev) => [...prev, {name: "set", duration: "0", range:"0", components: "-", effect: "-"}])
    }


    return (
        <div className={classes.tab}>
            {tab == "Attacks" && 
            <>
                <div>
                    <div className={classes.weaponHeader}>
                        <p>Name</p>
                        <p>Bonus</p>
                        <p>Damage</p>
                        <Button onClick={addClickHandle}>Add</Button>
                    </div>

                    <div className={classes.weaponContainer}>
                        {weapons.map((weapon, index) => (
                            <Weapon key={index} name={weapon.name} bonus={weapon.bonus} damage={weapon.damage}/>
                        ))}
                    </div>
                </div>

                <div className={classes.textarea}>
                    <h1>Skills</h1>
                    <textarea onBlur={handleBlur} id="skills" defaultValue={card.items}></textarea>
                </div>

            </>}
            {tab == "Spells" && 
            <>
                <div className={classes.spellHeader}>
                    <p>Spellcasting ability</p>
                    <p>Spell save DC</p>
                    <p>Spell atack bonus </p>
                </div>

                <div className={classes.spellStats}>
                    <p>WIP</p>
                    <p>WIP</p>
                    <p>WIP</p>
                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button>Settings</Button>
                    <Button onClick={addSpellClickHandle}>Add spell</Button>
                </div>

                <div style={{overflowY: "auto", height: "300px"}}>
                    {spells.map((spell, index) => (
                        <Spell key={index} name={spell.name} duration={spell.duration} range={spell.range} components={spell.components} effect={spell.effect}/>
                    ))}
                </div>
            </>}
            {tab == "Inventory" && 
            <>
                <div className={classes.textarea}>
                    <h1>Items</h1>
                    <textarea onBlur={handleBlur} id="items" defaultValue={card.items}></textarea>
                </div>

                <div className={classes.textarea}>
                    <h1>Treasures</h1>
                    <textarea onBlur={handleBlur} id="treasures" defaultValue={card.treasures}></textarea>
                </div>
            </>}
        </div>
    )
}
