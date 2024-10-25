import classes from './LeftTab.module.css';


const Textarea = ({name, value, style}) => (
    <div style={style} className={classes.textarea}>
        <h1>{name}</h1>
        <textarea></textarea>
    </div>
);


export default function LeftTab({tab, card, setCard}) {
    
    return (
        <div className={classes.tab}>
            {tab == "Character" && 
            <>
                <Textarea name={"Backstory"} />

                <div>
                    <Textarea name={"Allies and orgs"} />
                    <Textarea name={"Appearance"} />
                </div>
            </>}

            {tab == "Personality" && 
            <>
                <div>
                    <Textarea name={"Traits"} />
                    <Textarea name={"Ideals"} />
                </div>
                
                <div>
                    <Textarea name={"Bonds"} />
                    <Textarea name={"Flaws"} />
                </div>
            </>}

            {tab == "Other" && 
            <>
                <div>
                    <Textarea name={"Notes"} />
                    <Textarea name={"Notes"} />
                </div>
                 
                <div>
                    <Textarea name={"Notes"} />
                    <Textarea name={"Notes"} />
                </div>   
            </>}
        </div>
        
    )
}
