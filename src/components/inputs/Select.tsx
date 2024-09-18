import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import arrowImage from "@assets/select-arrow.png"
import { ISelectOption } from "../../lib/interfaces";
import SelectModal from "./SelectModal";


export interface IProps {
  options: ISelectOption[];
  value?: ISelectOption;
  label?: string;
  error?: string,
  showError?: boolean | undefined | string;
  className?: string;
  wrapperClassName?: string;
  placeholder?: string;
  onSelect: (value: ISelectOption) => void;
}

const Select = ({ wrapperClassName, className, label, placeholder, value, options, onSelect  } : IProps) => {

  const arrowRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const [showOptions, setShowOptions] = useState(false)


  useEffect(() => {
    if (arrowRef?.current && overlayRef?.current) {
      const arrowList = arrowRef.current?.classList
      const overlayList = overlayRef.current?.classList
      if (showOptions) {
        arrowList.add("rotate-180")
        overlayList.add("fixed")
        overlayList.remove("hidden")
      } else {
        arrowList.remove("rotate-180")
        overlayList.remove("fixed")
        overlayList.add("hidden")
      }
    }
  }, [showOptions, arrowRef, overlayRef])


  return (
    <div className={cn("w-full", wrapperClassName)}>
      <label className={cn("block mb-2 text-2xl")}> {label} </label>
      <div
        onClick={() => setShowOptions(!showOptions)}
        className={cn(
          "relative rounded-2xl rot flex justify-between items-center h-[56px] w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ",
          className,
          //showError ? "text-red-700 border-red-700" : ""
        )} >
        <p>{value?.name || placeholder}</p>
        <div>
          <img ref={arrowRef} className="duration-200" src={arrowImage} width={20} height={20} />
        </div>
        <SelectModal show={showOptions} options={options} onSelect={(option) => { onSelect(option); setShowOptions(false); }} />
      </div>
        {
          //showError && <p className="text-red-700">{error}</p>
        }
      <div onClick={() => setShowOptions(false)} ref={overlayRef} className="z-10 top-0 left-0 w-screen h-screen"></div>
    </div>
  )
}



export default Select
