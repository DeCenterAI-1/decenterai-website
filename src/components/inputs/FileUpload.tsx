import uploadIcon from "../../assets/upload-icon.png";

interface IProps {
    selectFile: (file: File) => void;
}

const FileUpload = ({ selectFile } : IProps ) => {

    const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
          selectFile(droppedFiles[0]);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
          selectFile(selectedFiles[0])
        }
    };

    return (
        <div className="">
            <p className="mb-2">Upload File</p>
            <label onDrop={handleDrop} onDragOver={(event) => event.preventDefault()} htmlFor={"upload-file"} className="flex flex-col justify-center items-center border-dashed border-primary-7 h-[88px] border-[1px] rounded-2xl large-gaps-border">

                <input type="file" hidden id="upload-file"
                    onChange={handleFileChange}
                    accept=".png, .jpg, .jpeg" />

                <img className="mb-2" src={uploadIcon} width={24} height={24}/>

                <p className="text-primary-7 text-sm">
                    <u className="text-primary-5 font-[archivo]"> Browse file</u>
                    <span className="text-xs"> or </span> 
                    <span> Drag and drop </span>
                </p>

            </label>
        </div>
    )
}

export default FileUpload