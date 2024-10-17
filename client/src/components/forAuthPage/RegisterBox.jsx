import {Formik, Form, Field} from "formik";
import {registerSchema} from "../schemas/login.js";

import Button from '../Button/Button';
import Input from '../Input/Input';


export default function RegisterBox({goBack, changeBox}) {
 
    const onSubmit = async (values, action) => {
        try {
            const response = await fetch('/api/createUser', {
                method: "POST",
                headers: {'Content-type': "application/json;charset=utf-8"},
                body: JSON.stringify(values),
                credentials: 'include',
            });

            if (response.status == 201) {
                const data = await response.json();
                goBack();    
            } else if (response.status == 400) {
                const errorData = await response.json();
                action.setErrors({submit: errorData.error})   
            } else {
                action.setErrors({submit: "Server error!"})
            }
        } catch (error) {
            action.setErrors({submit: "An unexpected error occured."})
        } finally {
            action.setSubmitting(false);
        }
    };   
    

    return(
        <>
            <h1>Welcome</h1>
            <Formik 
                initialValues={{login: "", email: "", username: "", password: ""}} 
                validationSchema={registerSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        {props.errors.submit && <h2>{props.errors.submit}</h2>}

                        <Input label="Login" id="loginInput" name="login" type="text"/>
                        <Input label="Email" id="emailInput" name="email" type="email"/>
                        <Input label="Name" id="usernameInput" name="username" type="text"/>
                        <Input label="Password" id="passwordInput" name="password" type="text"/>

                        <Button >Register</Button>
                    </Form>
                )}
            </Formik>
            <p>Already <Button onClick={() => changeBox("Login")} >have an account?</Button></p>
        </>
    )
}
