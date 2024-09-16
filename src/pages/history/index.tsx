import Container from "../../components/layouts/Container"
import StatusTag from "../../components/StatusTag";
import Table from "../../components/Table"
import { JOB_STATUS } from "../../lib/enums";
import { IJobDetails } from "../../lib/interfaces";

const jobs: IJobDetails[] = new Array(100).fill({
    job: "SpeechT5 (TTS task)",
    created: "8m ago",
    status: JOB_STATUS.COMPLETED,
    creator: "0x09750ad360fdb7",
    lastUpdated: "8m ago",
    rp: "0x09750ad360fdb7",
    cost: "13.10 DCEN"
});

const History = () => {


    return (
        <Container>
            <div className="h-screen flex items-center w-full">
                <Table heads={["job", "created", "status", "creator", "last updated", "rp", "cost"]}>
                    {
                        jobs.map((job, index) => {
                            return (
                                <tr key={index} className="h-[56px] w-full border-primary-11 border-[1px] rounded-2xl text-sm text-primary-5">
                                    <td className="text-center">{job.job}</td>
                                    <td className="text-center text-primary-7 text-xs">{job.created}</td>
                                    <td className="flex justify-center items-center h-[56px]">
                                        <div className="w-32"><StatusTag status={job.status} /> </div>
                                    </td>
                                    <td className="text-center">{job.creator}</td>
                                    <td className="text-center text-primary-7 text-xs">{job.lastUpdated}</td>
                                    <td className="text-center">{job.rp}</td>
                                    <td className="text-center text-primary-7 text-xs">{job.cost}</td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </div>
        </Container>
    )
}

export default History