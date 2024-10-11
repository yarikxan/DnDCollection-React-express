import {Formik, Form} from "formik";
import {resetSchema} from '../schemas/login.js'

import Button from '../Button/Button'
import Input from '../Input/Input'

export default function ResetBox({changeBox}) {
    
    return(
        <>
            <h1>Reset</h1>
            <h3></h3>
            <h3></h3>
            
            <Formik
                initialValues={{resetEmailInput: "", resetCodeInput: "", resetPasswordInput: ""}}
                validationSchema={resetSchema}
            >
                {(props) => (
                    <Form>
                        <div>
                            <div>
                                <Input label="" id="resetEmailInput" name="resetEmailInput" type="email"/>
                            </div>
                            <Button type={"button"} >Send email</Button>
                        </div>

                        <Input label="Code from email goes here" id="resetCodeInput" name="resetCodeInput" type="text"/>
                        <Input label="New password" id="resetPasswordInput" name="resetPasswordInput" type="text" />

                        <Button>Apply</Button>
                    </Form>

            )}
            </Formik>

            <p>Back to  <Button onClick={() => changeBox("Login")}>login</Button></p>
                
        </>
    )
}


