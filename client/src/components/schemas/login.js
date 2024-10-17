import * as yup from "yup";

export const loginSchema = yup.object().shape({
    login: yup.string().required("required"),
    password: yup.string().required("required"),
})

const loginPattern = /^[A-Za-z0-9]{6,36}/;
const namePattern = /.{6,36}/;
const passwordPattern = /(?=.*[a-z])(?=.*\d)[A-Za-z0-9\d@$%&!*?\[\]]{8,20}/;


export const registerSchema = yup.object().shape({
    login: yup.string().matches(loginPattern, {message: "6-36symbols only letters and digits"}).required("Required"),
    email: yup.string().email("Enter a valid email").required("Required"),
    username: yup.string().matches(namePattern, {message: "6-36 symbols only"}).required("Required"),
    password: yup.string().matches(passwordPattern, {message: "make a stronger password"}).required("Required"),
})


export const resetSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required"),
    code: yup.string().required("Required"),
    password: yup.string().matches(passwordPattern, {message: "make a stronger password"}).required("Required"),
})
