import classes from './LeftTab.module.css';


const Textarea = ({label, value, id, handleBlur, style}) => (
    <div style={{gap: "0rem"}} className={classes.textarea}>
        <h1>{label}</h1>
        <textarea onBlur={handleBlur} id={id} defaultValue={value}></textarea>
    </div>
);


export default function LeftTab({tab, card, setCard}) {
    
    const handleBlur = (event) => {
        setCard((prev) => ({
            ...prev,
            [event.target.id] : event.target.value,
        }));
    }

    return (
        <div className={classes.tab}>
            {tab == "Character" && 
            <>
                <Textarea handleBlur={handleBlur} id="backstory" label="Backstory" value={card.backstory} />

                <div>
                    <Textarea handleBlur={handleBlur} id="alliesAndOrgs" label={"Allies and orgs"} value={card.alliesAndOrgs} />
                    <Textarea handleBlur={handleBlur} id="appearance" label={"Appearance"} value={card.appearance} />
                </div>
            </>}

            {tab == "Personality" && 
            <>
                <div>
                    <Textarea handleBlur={handleBlur} id="personalityTraits" label={"Traits"} value={card.personalityTraits} />
                    <Textarea handleBlur={handleBlur} id="ideals" label={"Ideals"} value={card.ideals} />
                </div>
                
                <div>
                    <Textarea handleBlur={handleBlur} id="bonds" label={"Bonds"} value={card.bonds} />
                    <Textarea handleBlur={handleBlur} id="flaws" label={"Flaws"} value={card.flaws} />
                </div>
            </>}

            {tab == "Other" && 
            <>
                <div>
                    <Textarea handleBlur={handleBlur} id="notes1" label={"Notes"} value={card.notes1} />
                    <Textarea handleBlur={handleBlur} id="notes2" label={"Notes"} value={card.notes2}/>
                </div>
                 
                <div>
                    <Textarea handleBlur={handleBlur} id="notes3" label={"Notes"} value={card.notes3} />
                    <Textarea handleBlur={handleBlur} id="notes4" label={"Notes"} value={card.notes4}/>
                </div>   
            </>}
        </div>
        
    )
}
