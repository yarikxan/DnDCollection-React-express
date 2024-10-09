import './InfoSection.css'

export default function InfoSection({title, description, img}){
    return(
        <li className="info">
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <img src={img} alt="text"/>
        </li>
    )
}
