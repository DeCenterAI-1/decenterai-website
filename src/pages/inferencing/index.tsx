import { useFormik } from "formik"
import Container from "../../components/layouts/Container"
import { ISelectOption } from "../../lib/interfaces"
import Select from "../../components/inputs/Select"
import { MODELS } from "../../lib/constants"
import FileUpload from "../../components/inputs/FileUpload"
import UploadBanner from "../../components/UploadBanner"
import Input from "../../components/inputs/Input"
import Button from "../../components/inputs/Button"
import { useNavigate } from "react-router-dom"
import { inferenceSchema } from "./schema"

const Inference = () => {

    const navigate = useNavigate()

    const { values, errors, touched, setValues, handleChange, handleBlur, handleSubmit,  }  = useFormik({
        initialValues: {
            model: undefined as ISelectOption | undefined,
            files: [] as File[],
            prompt: ''
        },
        validationSchema: inferenceSchema,
        onSubmit: async(values) => {
            console.log(values)
        },
    })

    const handleSelectFile = (file: File) => {
        setValues({...values, files: [...values.files, file]})
    }

    const handleFileDelete = (index: number) => {
        const newArr = values.files.filter((_, currIndex) => currIndex !== index);
        setValues({...values, files: [...newArr]})
    }


    const run = () => {
        navigate("/inferencing/testing")
    }

    const hasError = Boolean(Object.keys(errors).length != 0 || Object.keys(touched).length == 0)

    return (
        <Container>

            <div className="h-screen flex w-full justify-center items-center">

                <form className="max-w-[640px] w-full text-white" onSubmit={handleSubmit}>

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

                        {
                            values.files.length > 0 &&
                                <div className="grid grid-cols-2 gap-2">
                                    <p className="col-span-2 text-primary-6 text-sm my-2">Uploaded Files</p>
                                    {
                                        values.files.map((file, index) => {
                                            return (<UploadBanner key={index} index={index} file={file} deleteFile={handleFileDelete} />)
                                        })
                                    }
                                </div>
                        }
                        
                        <Input 
                            name="prompt"
                            value={values.prompt}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="text-primary-7 border-primary-7" 
                            label="Prompt" 
                            wrapperClassName="my-4"
                            placeholder="e.g You are an helpful assitant"
                            showError={errors.prompt && touched.prompt}
                            error={errors.prompt} />

                    </div>

                    <Button onClick={run} disabled={hasError} className="text-primary-3 my-6">Run</Button>

                </form>

            </div>

        </Container>
    )
}

export default Inference