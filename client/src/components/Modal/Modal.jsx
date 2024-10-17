import {useRef, useEffect} from "react";
import {createPortal} from "react-dom";

import './Modal.css';
import Button from '../Button/Button';

export default function Modal({children, close, open, className, ...props} ) {
    const dialog = useRef();


    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }       
    }, [open])


    return createPortal(
        <dialog className={`modal ${className}`} ref={dialog}>
            <section className="modalButtonContainer">
                <Button onClick={close}>x</Button>
            </section>
            {children}    
        </dialog>,
        document.getElementById('modal')
    )

}
