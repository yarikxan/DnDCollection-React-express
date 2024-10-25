import classes from './ProgressBar.module.css';

export default function ProgressBar({data}){
    
    return(
        <div style={{border: `2px solid ${data.borderColor}`}} className={classes.progressBar}>
            <p style={{backgroundColor: data.color, borderRight: `2px solid ${data.borderColor}`}} className={classes.barName}>{data.barName}</p>
            <div style={{flexBasis: "70%", display: "flex"}}>
                <span style={{width: data.progress, backgroundColor: data.color}} className={classes.barProgress}></span>
                <p className={classes.barValue} >{data.barValue}</p>
            </div>
        </div>
    )
}
