import './Banner.css';
import {useState, useEffect, useRef} from 'react';

export default function MainPageBanner(){
    const banner = useRef();
    const [bgPos, setBgPos] = useState('0px');

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = event.clientX;
            const xPercent = (x / banner.current.offsetWidth) * 100;

            setBgPos(`calc(${x}px + 100vw)`);
        }

        banner.current.addEventListener('mousemove', handleMouseMove);

        return () => {banner.current.removeEventListener('mousemove', handleMouseMove);}
        
    }, []);

    return(
        <div ref={banner} style={{backgroundPosition: bgPos}} className="mainPageBanner">
            <div>
                <a href="/play">Start</a>
            </div>
        </div>
    )
}
