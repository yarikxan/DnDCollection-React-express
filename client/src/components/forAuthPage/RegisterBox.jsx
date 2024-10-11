import {Formik, Form, Field} from "formik";
import {registerSchema} from "../schemas/login.js"

import Button from '../Button/Button'
import Input from '../Input/Input'

const onSubmit = async (values, action) => {
    
}

export default function RegisterBox({changeBox}) {
    
    return(
        <>
            <h1>Welcome</h1>
            <Formik 
                initialValues={{regLoginInput: "", regEmailInput: "", regUserNameInput: "", regPasswordInput: ""}} 
                validationSchema={registerSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        <Input label="Login" id="regLoginInput" name="regLoginInput" type="text"/>
                        <Input label="Email" id="regEmailInput" name="regEmailInput" type="email"/>
                        <Input label="Name" id="regUserNameInput" name="regUserNameInput" type="text"/>
                        <Input label="Password" id="regPasswordInput" name="regPasswordInput" type="text"/>

                        <Button >Register</Button>
                    </Form>
                )}
            </Formik>
            <p>Already <Button onClick={() => changeBox("Login")} >have an account?</Button></p>
        </>
    )
}
