

import classes from './BonusBox.module.css';

export default function BonusBox({data}) {

    return (
        <div className={classes.bonusBox}>
            <h4>{data.value}</h4>
            <p>{data.name}</p>
        </div>
    )
}
