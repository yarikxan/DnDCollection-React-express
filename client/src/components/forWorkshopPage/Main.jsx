import {useState, useEffect} from "react";


import classes from './Main.module.css';
import Button from '../Button/Button';
import BonusBox from './BonusBox';
import ProgressBar from './ProgressBar';
import StatBox from './StatBox';
import SpecialStatBox from './SpecialStatBox';
import PassivesBox from './PassivesBox';
import LeftTab from './LeftTab';
import RightTab from './RightTab';
import Modal from '../Modal/Modal';
import InfoModalForm from './InfoModalForm';
import BonusModalForm from './BonusModalForm';
import RightTabModal from './RightTabModal';

export default function Main({card, setCard}) {

    const [infoModal, setInfoModal] = useState(false);
    const expForLevels = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000, 50000];
    
    const [bonusModal, setBonusModal] = useState(false);
    const [rightTabModal, setRightTabModal] = useState(false);

    const [lTab, setLTab] = useState("Character");
    const [rTab, setRTab] = useState("Attacks");



    useEffect(() => {console.log(card)}, [card]);

    return (
        <main className={classes.main}>
                
            <Modal close={() => setInfoModal(false)} isOpen={infoModal} className={classes.modal}>
                <InfoModalForm card={card} setCard={setCard} expForLevels={expForLevels}/>
            </Modal>

            <section className={classes.infoSection}>
                <Button onClick={() => {setInfoModal(true)}} className={classes.pfpWrapper}>
                    <img className={classes.pfp} src={ card.imgIdURL || "/img/nopfp.jpg"} alt="pfp" />
                </Button>

                <div className={classes.infoText}>
                    <h1>{card.name || "Name"}</h1>
                    <div style={{display: "flex", gap: "0.2rem"}}>
                        <p>{card.race || "Race"}</p>
                        <p>{card.class || "Class"}</p>
                        <p>{card.backstory || "Backstory"}</p>
                        <p>{card.alignment || "Alignment"}</p>
                    </div>
                    <ProgressBar data={{
                            barName: `Level ${card.level}`, 
                            barValue: `${card.exp}/${expForLevels[card.level]}`, 
                            progress: `${Math.round((card.exp - expForLevels[card.level -1]) / (expForLevels[card.level] - expForLevels[card.level - 1]) * 100)}%`, 
                            borderColor: "#7c3aed", color: "#a78bfa"
                        }} 
                    />
                </div>
            </section>

            <Modal close={() => setBonusModal(false)} isOpen={bonusModal} className={classes.modal}>
                <BonusModalForm card={card} setCard={setCard} />
            </Modal>

            <section className={classes.bonusSection}>
                <Button onClick={() => {setBonusModal(true)}} style={{flexBasis: "20%"}} className={classes.bonusArmor}>
                    <h4>{card.armorClass || "00"}</h4>
                </Button>

                <Button onClick={() => {setBonusModal(true)}}> <BonusBox data={{name: "Speed", value: `${card.speed}`}}/> </Button>
                <Button onClick={() => {setBonusModal(true)}}> <BonusBox data={{name: "Mastery", value: `+${Math.ceil(card.level / 4) + 1}`}}/> </Button>
                <Button onClick={() => {setBonusModal(true)}}> <BonusBox data={{name: "Inspiration", value: `${card.inspiration}`}}/> </Button>
                <Button onClick={() => {setBonusModal(true)}}> <BonusBox data={{name: "Initiative", value : `+${card.initiative}`}}/> </Button>
            </section>

            
            <Modal close={() => setRightTabModal(false)} isOpen={rightTabModal} className={classes.modal} >
                <RightTabModal card={card} setCard={setCard}/>
            </Modal>
            
            <section className={classes.topRightSection}>
                <Button onClick={() => {setRightTabModal(true)}}> <BonusBox data={{name: "Gold", value: `${card.gold}`}} /> </Button>
                <Button onClick={() => {setRightTabModal(true)}}> <BonusBox data={{name: "Hit dice", value: `${card.hitDices || "0d0"}`}} /> </Button>

                <Button onClick={() => {setRightTabModal(true)}} style={{flexBasis: "60%", padding: "0 1rem"}}>
                    <div className={classes.bars}>
                        <ProgressBar data={{
                                barName: "hits", 
                                barValue: `${card.hits}/${card.maxHits}`, 
                                progress: `${Math.round(card.hits / card.maxHits * 100)}%`, 
                                borderColor: "#166534", 
                                color: "#15803d"
                            }} 
                        />
                        <ProgressBar data={{
                                barName: "temp", 
                                barValue: `${card.tempHits}`, 
                                progress: `${Math.round(card.tempHits / card.maxHits * 100)}%`, 
                                borderColor: "#075985", 
                                color: "#0369a1"
                            }} 
                        />
                    </div>
                </Button>
            </section>
            
            <section className={classes.statsSection}>
                <SpecialStatBox top={<StatBox card={card} setCard={setCard} stat={card.stats[0]} />} bottom={<StatBox card={card} setCard={setCard} stat={card.stats[1]} />} />

                {card.stats.slice(2).map((stat) => (
                    <StatBox key={stat.name} card={card} setCard={setCard} stat={stat} />
                ))}
                
                <PassivesBox card={card} setCard={setCard}/>
            </section>


            <section style={{gridColumn: "span 12 / span 12", display: "flex", marginTop: "1rem"}}>
                <div className={classes.tab}>
                    <div className={classes.tabButtons}>
                        <Button className={lTab=="Character" && classes.activeButton} onClick={() => {setLTab("Character")}}>Character</Button>
                        <Button className={lTab=="Personality" && classes.activeButton} onClick={() => {setLTab("Personality")}}>Personality</Button>
                        <Button className={lTab=="Other" && classes.activeButton} onClick={() => {setLTab("Other")}}>Other</Button>
                    </div>

                    <LeftTab tab={lTab} card={card} setCard={setCard} />
                </div>

                <div className={classes.tab}>
                    <div className={classes.tabButtons}>
                        <Button className={rTab=="Attacks" && classes.activeButton} onClick={() => {setRTab("Attacks")}}>Attacks</Button>
                        <Button className={rTab=="Spells" && classes.activeButton} onClick={() => {setRTab("Spells")}}>Spells</Button>
                        <Button className={rTab=="Inventory" && classes.activeButton} onClick={() => {setRTab("Inventory")}}>Inventory</Button>
                    </div>

                    <RightTab tab={rTab} card={card} setCard={setCard}/>
                </div>
            </section>
        </main>
    )
}
