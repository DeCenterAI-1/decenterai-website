import * as yup from "yup"

export const inferenceSchema = yup.object().shape({
    //model: yup.string().min(3).required("You must choose a model"),
    prompt: yup.string().min(3).required("Should contain at least 3 characters"),
})
