import { cn } from "../lib/utils"
import trashIcon from "../assets/Trash.png"
import { useEffect, useState } from "react";

interface IProps {
    index: number;
    file: File;
    deleteFile: (index: number) => void;
}

const UploadBanner = ({ index, file, deleteFile }: IProps) => {

    const [fileName, setFileName] = useState("")

    const convertBytes = () => {
        let size = file.size / 1000
        if (size <= 1000) return size.toFixed(2) + "KB"
        size = size / 1000
        if (size <= 1000) return size.toFixed(2) + "MB"
        size = size / 1000
        if (size <= 1000) return size.toFixed(2) + "GB"
    }

    useEffect(() => {
        if (file.name.length > 20) {
            const split = file.name.split(".")
            setFileName(file.name.slice(0, 20) + "-." + split[split.length - 1])
        } else {
            setFileName(file.name)
        }
    }, [file])

    return (
        <div className={cn("flex items-center justify-between w-full h-9 px-3 rounded-md bg-primary-12")}>
            <p className="text-primary-7 text-xs">{fileName}</p>
            <div className="flex gap-2">
                <p className="text-sm text-primary-7">{convertBytes()}</p>
                <button onClick={() => deleteFile(index)}>
                    <img src={trashIcon} width={16} />
                </button>
            </div>
        </div>
    )
}

export default UploadBanner