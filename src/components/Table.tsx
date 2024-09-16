import { ReactNode } from "react";

interface IProps {
    heads: string[];
    children: ReactNode;
}

const Table = ({heads,  children}: IProps) => {

    return (
        <div className="h-[80vh] w-full basis-full rounded-[20px] border-[1px] border-primary-12 p-6 overflow-y-auto bg-[#080808]">
            <table className="w-full my-table border-separate border-spacing-y-4">
                <thead className="font-[logirent]">
                    <tr>
                        {
                            heads.map((head, index) => {
                                return (<th key={index}>{head}</th>)
                            })
                        }
                    </tr>
                </thead>
                <tbody className="mb-4">
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table