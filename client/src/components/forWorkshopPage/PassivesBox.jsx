import classes from './PassivesBox.module.css';


export default function PassivesBox({card, setCard}){

    return (
        <div>
            <section className={classes.top}>
                <div className={classes.container}>
                    <p className={classes.name}>Passive perception</p>
                    <p className={classes.throw}>{"+0"}</p>
                </div>
                
                <div className={classes.container}>
                    <p className={classes.name}>Passive insight</p>
                    <p className={classes.throw}>{"+0"}</p>
                </div>
                
                <div className={classes.container}>
                    <p className={classes.name}>Passive analysis</p>
                    <p className={classes.throw}>{"+0"}</p>
                </div>

           </section>

            <section className={classes.bottom}>
                <h1>Profinciencies and languages</h1>
                <textarea></textarea>
            </section>
        </div>
    )
}
