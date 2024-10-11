import './Main.css'
import {infoSections} from './infoSections.js'
import InfoSection from './InfoSection'

export default function MainPage(){
    
    return(
        <main className="main">
            <ul>
                {infoSections.map((section) => (
                    <InfoSection key={section.title} {...section}/>
                ))}
            </ul>
        </main>
    )
}
