import './Input.css'
import {useField} from "formik"

export default function Input({label, className ,...props}) {
    const [field, meta, helpers] = useField(props);


    return (
        <>
            <label htmlFor={props.id}>{label}</label>
            <input {...field} {...props} className={meta.error && meta.touched? `inputError ${className}`: className}/>
            {meta.touched && meta.error && <p className="pError">{meta.error}</p>}
        </>
    );

} 
