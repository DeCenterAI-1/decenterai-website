import modelText from "../../assets/models-text.png"
import { ISelectOption } from "../../lib/interfaces";

export interface IProps {
    show: boolean;
    options: ISelectOption[];
    onSelect: (value: ISelectOption) => void;
}

const SelectModal = ({show, options, onSelect}: IProps) => {

    if (!show) return

    return (
        <div className="absolute z-50 left-0 top-14 bg-primary-12 rounded-lg overflow-auto w-full">

            <div className="flex justify-center py-10 font-bold text-2xl text-primary-1">
                <img src={modelText} width={103} height={"auto"} />
            </div>


            <div className="px-8 flex flex-col gap-4">

                {
                    options.map((option, index) => {
                        return (
                            <div onClick={() => onSelect(option)} key={index} className={"rounded-2xl flex justify-between items-center h-[56px] text-primary-7 border-primary-10 border-[1px] px-6"} >
                                {option.name}
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default SelectModal