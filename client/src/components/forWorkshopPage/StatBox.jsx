import classes from './StatBox.module.css';
import Skill from './Skill';


export default function StatBox({name, value, skills}) {

    return (
        <div>
            <section style={{display: "flex"}}>
                <div className={classes.stat}>
                    <input type="number" value={value || 0}/>
                    <h2>{name}</h2>
                </div>

                <div className={classes.modifiers}>
                    <div style={{display: "flex", gap: "0.3rem"}}>
                        <p className={classes.throw}>Check</p>
                        <p className={classes.modifier}>{"+0"}</p>
                    </div>

                    <div style={{display: "flex", gap: "0.3rem"}}>
                        <p className={classes.throw}>Save</p>
                        <p className={classes.modifier}>{"+0"}</p>
                    </div>
                </div>
            </section>

            <section style={{display: "flex", flexDirection: "column", borderTop: "1px solid #6366f133"}}>
                {skills.map((skill) => (
                    <Skill key={skill.name} {...skill} />
                ))}
            </section>    
        </div>
    )
}
