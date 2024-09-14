import Button from "../../components/inputs/Button"
import Container from "../../components/layouts/Container"
import StatusTag from "../../components/StatusTag"
import { JOB_STATUS } from "../../lib/enums"
import { cn } from "../../lib/utils"


const InferencingJob = () => {


    const InfoCell = ({title, content, left} : { title: string, content: string, left: boolean }) => {
        return (
            <div className={cn(left ? "col-span-9" : "col-span-3")}>
                <h3 className="text-xl">{title}</h3>
                <p className="text-sm text-primary-6 mt-2">{content}</p>
            </div>
        )
    }


    return (
        <Container>

            <div className="h-screen flex items-center">

                <div className="w-[714px] flex flex-col text-white bg-black rounded-2xl p-16">

                    <h2 className="text-2xl">Status</h2>

                    <div className="relative h-10 my-2">

                        <div className="absolute -left-3">

                            <StatusTag status={JOB_STATUS.SUBMITED} />

                        </div>

                    </div>

                    <div className="gap-6 grid grid-cols-12">

                        <InfoCell title="Job"  content="0x09750ad360fdb7" left={true} />

                        <InfoCell title="Cost"  content="0x09750ad360fdb7" left={false} />

                        <InfoCell title="Creator"  content="0x09750ad360fdb7" left={true} />

                        <InfoCell title="Duration"  content="0x09750ad360fdb7" left={false} />

                        <InfoCell title="Created"  content="0x09750ad360fdb7" left={true} />

                        <InfoCell title="Last Updated"  content="0x09750ad360fdb7" left={false} />

                        <InfoCell title="Resource Provider"  content="0x09750ad360fdb7" left={true} />
                        
                    </div>

                    <div className="grid grid-cols-2 px-5 mt-8 gap-4">

                        <Button disabled className="text-sm h-12">Run another inference</Button>

                        <Button disabled className="text-sm h-12">Download Output</Button>

                    </div>

                </div>

            </div>

        </Container>
    )
}

export default InferencingJob