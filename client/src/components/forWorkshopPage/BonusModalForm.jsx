
const Input = ({label, id, onBlur, defaultValue}) => (
    <div style={{display: "flex", flexDirection: "column"}}>
        <input onBlur={onBlur} id={id} type="number" defaultValue={defaultValue} />
        <label style={{margin: "0 1rem"}} htmlFor={id}>{label}</label>
    </div>
) 


export default function BonusModalForm({card, setCard}) {
    const handleBlur = (event) => {
        setCard((prev) => ({...prev, [event.target.id]: event.target.value }));
    };


    return(
        <>
            <form style={{gap: "1rem"}}>
                <Input onBlur={handleBlur} label="Armor class" id="armorClass" defaultValue={card.armorClass} />
                <Input onBlur={handleBlur} label="Speed" id="speed" defaultValue={card.speed} />
                <Input onBlur={handleBlur} label="Inspiration" id="inspiration" defaultValue={card.inspiration} />
                <Input onBlur={handleBlur} label="Initiative" id="initiative" defaultValue={card.initiative} /> 
            </form>
        </>
    )
}
