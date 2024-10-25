import classes from './RightTab.module.css';
import Button from '../Button/Button';

const Weapon= ({name, bonus, damage, description}) => (
    <div className={classes.weapon}>
        <Button>{name}</Button>
        <Button>{bonus}</Button>
        <Button>{damage}</Button>
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
    return (
        <div className={classes.tab}>
            {tab == "Attacks" && 
            <>
                <div className={classes.weaponHeader}>
                    <p>Name</p>
                    <p>Bonus</p>
                    <p>Damage</p>
                    <div style={{display: "flex", gap: "0.5rem", padding: "0.25rem 0"}}>
                        <Button>More</Button>
                        <Button>Less</Button>
                    </div>
                </div>

                <div className={classes.weaponContainer}>
                    <Weapon name={"Set"} bonus={"+0"} damage={"0d0"} />
                </div>

                <div className={classes.textarea}>
                    <h1>Skills</h1>
                    <textarea></textarea>
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
                    <p>Charizma</p>
                    <p>13</p>
                    <p>+0</p>
                </div>

                <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Button>Settings</Button>
                    <Button>Add spell</Button>
                </div>

                <div style={{overflowY: "auto", height: "8rem"}}>
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                    <Spell name={"fireball"} duration={"action"} range={"30ft"} components={"-"} effect={"5d8"} />
                </div>
            </>}
            {tab == "Inventory" && 
            <>
                <div className={classes.textarea}>
                    <h1>Items</h1>
                    <textarea></textarea>
                </div>

                <div className={classes.textarea}>
                    <h1>Treasures</h1>
                    <textarea></textarea>
                </div>
            </>}
        </div>
    )
}
