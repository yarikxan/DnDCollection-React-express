import {Formik, Form} from 'formik';
import {loginSchema} from '../schemas/login.js'

import Input from '../Input/Input'
import Button from '../Button/Button'

const onSubmit = async (values, actions) => {
    console.log("Submited");
    actions.resetForm()
}

export default function LoginBox({changeBox}) {

    return (
        <>
            <h1> Welcome back! </h1>
            <Formik
                initialValues ={{loginInput: "", passwordInput: ""}}
                validationSchema={loginSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        <Input label="Login" id="loginInput" name="loginInput" type="text" />
                        <Input label="Password" id="passwordInput" name="passwordInput" type="password"/>

                        <Button disabled={props.isSubmitting} type={"submit"}>Login</Button>
                    </Form>
                )}
                
            </Formik>
            
            <p>You may <Button onClick={() => changeBox("Register")} >register</Button> a new account <br/> or <Button onClick={() => changeBox("Reset")}>reset</Button> password</p>
        </>

    )
}
