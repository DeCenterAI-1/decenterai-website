import { ReactNode } from "react";

interface IProps {
    heads: string[];
    children: ReactNode;
}

const Table = ({heads,  children}: IProps) => {

    return (
        <div className="h-[80vh] w-full basis-full bg-primary-12 rounded-[20px] border-[1px] border-primary-5 p-6 overflow-auto">
            <table className="w-full">
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