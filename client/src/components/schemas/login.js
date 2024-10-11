import * as yup from "yup";

export const loginSchema = yup.object().shape({
    loginInput: yup.string().required("required"),
    passwordInput: yup.string().required("required"),
})

const loginPattern = /^[A-Za-z0-9]{6,36}/;
const namePattern = /.{6,36}/;
const passwordPattern = /(?=.*[a-z])(?=.*\d)[A-Za-z0-9\d@$%&!*?\[\]]{8,20}/;


export const registerSchema = yup.object().shape({
    regLoginInput: yup.string().matches(loginPattern, {message: "6-36symbols only letters and digits"}).required("Required"),
    regEmailInput: yup.string().email("Enter a valid email").required("Required"),
    regUserNameInput: yup.string().matches(namePattern, {message: "6-36 symbols only"}).required("Required"),
    regPasswordInput: yup.string().matches(passwordPattern, {message: "make a stronger password"}).required("Required"),
})


export const resetSchema = yup.object().shape({
    resetEmailInput: yup.string().email("Enter a valid email").required("Required"),
    resetCodeInput: yup.string().required("Required"),
    resetPasswordInput: yup.string().matches(passwordPattern, {message: "make a stronger password"}).required("Required"),
})
