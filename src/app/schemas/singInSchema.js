import * as Yup from "yup"

export const singInSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Email"),
    password: Yup.string()
        .required("Please Enter Password")
        .min(8).min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/^[A-Z]+[a-zA-Z]/, 'First letter should be uppercase')
    //confirme pass ke liye 
    //confirm_password: Yup.string().required().oneOf(Yup.ref('password'))
})