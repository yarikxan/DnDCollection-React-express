import classes from './Skill.module.css';

export default function Skill({name, value}) {

    return (
        <div className={classes.container}>
            <input type="checkbox" />
            <p className={classes.name}>{name}</p>
            <p className={classes.modifier}>{"+0"}</p>
        </div>
    )
}
