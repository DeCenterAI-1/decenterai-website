import { RotatingLines } from "react-loader-spinner"
import { JOB_STATUS } from "../lib/enums"

const StatusTag = ({status} : { status : JOB_STATUS }) => {

    return (
        <div className="flex items-center h-9 rounded-full px-3 bg-primary-11">

            <div>
                {
                    status !== JOB_STATUS.COMPLETED ? (
                        <RotatingLines
                            visible={true}
                            width="20"
                            strokeColor="#5d5d5d"
                            strokeWidth="4"
                            animationDuration="0.75"                            
                            ariaLabel="rotating-lines-loading"
                            />)
                        : (<div></div>)
                }
            </div>

            <p className="text-sm text-primary-3 ml-2">{status}</p>

        </div>
    )
}

export default StatusTag