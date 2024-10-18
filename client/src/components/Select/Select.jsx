import {useField} from "formik";

export default function Select({label, ...props}){
    const [field, meta, helpers] = useField(props);

    return(
        <>
            <label htmlFor={props.id}>{label}</label>
            <select {...field} {...props} className={meta.touched && meta.error? "selectError" : ""} />
            {meta.touched && meta.error && <p>{meta.error}</p>}
        </>
    )

}
