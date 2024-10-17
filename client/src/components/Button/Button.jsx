import './Button.css'

export default function Button({children, className,...props}) {
    return ( 
        <button
        {...props}
        className={className? className: "button"}
        >
          {children}
        </button> 
    )
}
