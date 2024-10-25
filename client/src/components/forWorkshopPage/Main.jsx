import {useState} from "react";

import classes from './Main.module.css';
import Button from '../Button/Button';
import BonusBox from './BonusBox';
import ProgressBar from './ProgressBar';
import StatBox from './StatBox';
import SpecialStatBox from './SpecialStatBox';
import PassivesBox from './PassivesBox';
import LeftTab from './LeftTab';
import RightTab from './RightTab';

export default function Main({card, setCard}) {
    const [lTab, setLTab] = useState("Character");
    const [rTab, setRTab] = useState("Attacks");

    return (
        <main className={classes.main}>

            <section className={classes.infoSection}>
                <Button className={classes.pfpWrapper}>
                    <img className={classes.pfp} src={card.imgIdURL || "/img/nopfp.jpg"} alt="pfp" />
                </Button>

                <div className={classes.infoText}>
                    <h1>{card.name || "Name"}</h1>
                    <div style={{display: "flex", gap: "0.2rem"}}>
                        <p>{card.race || "Race"}</p>
                        <p>{card.class || "Class"}</p>
                        <p>{card.backstory || "Backstory"}</p>
                        <p>{card.alignment || "Alignment"}</p>
                    </div>
                    <ProgressBar data={{barName: `Level ${card.level || 1}`, barValue: `${card.exp || 0}/300`, progress: "30%", borderColor: "#7c3aed", color: "#a78bfa"}} />
                </div>
            </section>

            <section className={classes.bonusSection}>
                <div className={classes.bonusArmor}>
                    <h4>{card.armorClass || "00"}</h4>
                </div>

                <BonusBox data={{name: "Speed", value: `${card.speed || 0}`}} />
                <BonusBox data={{name: "Mastery", value: `${card.mastery || "+2"}`}} />
                <BonusBox data={{name: "Inspiration", value: `${card.inspiration || 0}`}} />
                <BonusBox data={{name: "Initiative", value : `${card.initiative || 0}`}} />
            </section>
            
            <section className={classes.topRightSection}>
                <BonusBox data={{name: "Gold", value: `${card.gold || 0}`}} />
                <BonusBox data={{name: "Hit dice", value: `${card.hitDices || "0d0"}`}} />

                <div className={classes.bars}>
                    <ProgressBar data={{barName: "hits", barValue: `${card.hits || 0}/${card.maxHits || 0}`, progress: "30%", borderColor: "#166534", color: "#15803d"}} />
                    <ProgressBar data={{barName: "temp", barValue: `${card.tempHits || 0}`, progress: "30%", borderColor: "#075985", color: "#0369a1"}} />
                </div>
            </section>
            
            <section className={classes.statsSection}>
                <SpecialStatBox top={<StatBox {...card.stats[0]} />} bottom={<StatBox {...card.stats[1]} />} />

                {card.stats.slice(2).map((stat) => (
                    <StatBox key={stat.name} {...stat} />
                ))}
                
                <PassivesBox profinciences={card.profinciences}/>
            </section>


            <section style={{gridColumn: "span 12 / span 12", display: "flex", marginTop: "1rem"}}>
                <div className={classes.tab}>
                    <div className={classes.tabButtons}>
                        <Button className={lTab=="Character" && classes.activeButton} onClick={() => {setLTab("Character")}}>Character</Button>
                        <Button className={lTab=="Personality" && classes.activeButton} onClick={() => {setLTab("Personality")}}>Personality</Button>
                        <Button className={lTab=="Other" && classes.activeButton} onClick={() => {setLTab("Other")}}>Other</Button>
                    </div>

                    <LeftTab tab={lTab} />
                </div>

                <div className={classes.tab}>
                    <div className={classes.tabButtons}>
                        <Button className={rTab=="Attacks" && classes.activeButton} onClick={() => {setRTab("Attacks")}}>Attacks</Button>
                        <Button className={rTab=="Spells" && classes.activeButton} onClick={() => {setRTab("Spells")}}>Spells</Button>
                        <Button className={rTab=="Inventory" && classes.activeButton} onClick={() => {setRTab("Inventory")}}>Inventory</Button>
                    </div>

                    <RightTab tab={rTab} />
                </div>
            </section>
        </main>
    )
}
