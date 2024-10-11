import './Footer.css'
import {data} from './footerData.js'
import LinkList from './LinkList'

export default function Footer() {
    return(
        <footer className="footer">
            {data.map((d) => (
                <LinkList key={d.title} {...d} />
            ))}
        </footer>
    )
}
