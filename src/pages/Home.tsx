import { useFormik } from "formik"
import Button from "../components/inputs/Button"
import Input from "../components/inputs/Input"
import Select from "../components/inputs/Select"
import Container from "../components/layouts/Container"
import { MODELS } from "../lib/constants"
import { ISelectOption } from "../lib/interfaces"
import FileUpload from "../components/inputs/FileUpload"

const Home = () => {


    const { values, errors, touched, setValues, handleChange, handleBlur, handleSubmit,  }  = useFormik({
        initialValues: {
            model: undefined as ISelectOption | undefined,
            text: ''
        },
        //validationSchema: authSchema,
        onSubmit: async(values) => {
            console.log(values)
        },
    })

    const handleSelectFile = (file: File) => {
        console.log(file)
    }

    const hasError =  Boolean(false || errors || touched)

    return (
        <div className="mt-[10%]">
            <Container>
                <form className="w-[640px] text-white" onSubmit={handleSubmit}>

                    <div className="px-4">

                        <Select 
                            value={values.model}
                            onSelect={(option) => setValues({...values, model: option})}
                            options={MODELS}
                            className="text-primary-7 border-primary-7" 
                            label="Model"
                            wrapperClassName="my-4"
                            placeholder="Select Model"/>

                        {
                            values.model && <FileUpload selectFile={handleSelectFile} />
                        }
                        
                        <Input 
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="text-primary-7 border-primary-7" 
                            label="Prompt" 
                            wrapperClassName="my-4"
                            placeholder="e.g You are an helpful assitant" />

                    </div>

                    <Button disabled={hasError} className="text-primary-3 my-6">Run</Button>

                </form>
            </Container>
        </div>
    )
}

export default Home