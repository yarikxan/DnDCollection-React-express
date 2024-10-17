import {Formik, Form} from "formik";
import {resetSchema} from '../schemas/login.js'
import {useState} from "react";

import Button from '../Button/Button';
import Input from '../Input/Input';
import './ResetBox.css';

export default function ResetBox({goBack, changeBox}) {
    const [sendEmailState, setSendEmailState] = useState("");
    
    const sendResetMail = async () => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const email = document.getElementById("emailInput").value;
        if (!email || !pattern.test(email)) {
            return;
        }

        try {
            setSendEmailState(1);
            const response = await fetch("/api/sendResetMail", {
                method: "POST",
                headers: {"Content-type": "application/json;charset=utf-8"},
                body: JSON.stringify({email: email})
            });

            if (response.status == 200) {
                setSendEmailState(200);
            } else if (response.status == 400) {
                setSendEmailState(400);
            } else {
                setSendEmailState(2);
            }
        } catch (error) {
            setSendEmailState(2);
        }
    };

    const onSubmit = async (values, actions) => {
        setSendEmailState("");
        let err = false;

        try{
            const response = await fetch("/api/changeUserPassword", {
                method: "PATCH",
                headers: {"Content-type": "application/json;charset=utf-8"},
                body: JSON.stringify(values)
            });


            if (response.status == 200) {
                alert("Password changed succesfully")

            } else if (response.status == 400) {
                actions.setErrors({submit: "Wrong code"});
                err = true;
            } else {
                err = true;
                actions.setErrors({submit: "Something unexpected happened"});
            }

        } catch {
            err = true;
            actions.setErrors({submit: "Server error"});
        } finally {
            actions.setSubmitting(false);
            if (!err) {goBack();} 
        }
    };

    return(
        <>
            <h1>Reset</h1>
            <Formik
                initialValues={{email: "", code: "", password: ""}}
                validationSchema={resetSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        {sendEmailState == 1 && <h2 className="infoMsg">Sending...</h2>}
                        {sendEmailState == 200 && <h2 className="infoMsg">Email sent</h2>}
                        {sendEmailState == 400 && <h2 className="errorMsg">Wrong email</h2>}
                        {sendEmailState == 2 && <h2 className="errorMsg">Server error</h2>}

                        {props.errors.submit && <h2 className="errorMsg">{props.errors.submit}</h2>}

                        <div>
                            <div>
                                <Input label="" id="emailInput" name="email" type="email"/>
                            </div>
                            <Button onClick={sendResetMail} type={"button"} >Send email</Button>
                        </div>

                        <Input label="Code from email goes here" id="codeInput" name="code" type="text"/>
                        <Input label="New password" id="passwordInput" name="password" type="text" />

                        <Button>Apply</Button>
                    </Form>

            )}
            </Formik>

            <p>Back to  <Button onClick={() => changeBox("Login")}>login</Button></p>
                
        </>
    )
}


