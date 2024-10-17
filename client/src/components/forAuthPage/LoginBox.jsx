import {Formik, Form} from 'formik';
import {loginSchema} from '../schemas/login.js'

import Input from '../Input/Input'
import Button from '../Button/Button'


export default function LoginBox({goBack, changeBox}) {

    const onSubmit = async (values, actions) => {
        try {
            const response = await fetch('/api/authUser', {
                method: "POST",
                headers: {"Content-type": "application/json;charset=utf-8"},
                body: JSON.stringify(values),
                credentials: "include",
            });

            if (response.status == 200) {
                const data = await response.json();
                goBack();
            } else if (response.status == 400) {
                const errorData = await response.json();
                actions.setErrors({submit: "Wrong details"});
            } else {
                actions.setErrors({submit: "Server error!"});
            }
        } catch (error) {
            actions.setErrors({submit: "An unexpected error occured."});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <>
            <h1> Welcome back! </h1>
            <Formik
                initialValues ={{login: "", password: ""}}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        {props.errors.submit && <h2>{props.errors.submit}</h2>}
                        
                        <Input label="Login" id="loginInput" name="login" type="text" />
                        <Input label="Password" id="passwordInput" name="password" type="password"/>

                        <Button disabled={props.isSubmitting} type={"submit"}>Login</Button>
                    </Form>
                )}
                
            </Formik>
            
            <p>You may <Button onClick={() => changeBox("Register")} >register</Button> a new account <br/> or <Button onClick={() => changeBox("Reset")}>reset</Button> password</p>
        </>

    )
}
