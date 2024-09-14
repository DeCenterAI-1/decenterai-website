import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string,
    showError?: boolean | undefined | string;
    wrapperClassName: string;
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ wrapperClassName, className, type, label, placeholder, onBlur, value, ...props }, ref) => {

    const { error, showError } = props

    const placeHolderRef = useRef<HTMLParagraphElement>()

    const [showText, setShowText] = useState(false)


    useEffect(() => {

      if (placeHolderRef?.current) {

        const element = (placeHolderRef.current as HTMLParagraphElement)?.classList

        if (showError) {
          element?.add("text-red-700")
          element?.add("border-red-700")
        } else {
          element?.remove("text-red-700")
          element?.remove("border-red-700")
        }

      }
    }, [showError])


    const handleFocus = () => {
      // if (placeHolderRef?.current) {
      //   const element = (placeHolderRef.current as HTMLParagraphElement)?.classList
      //   element?.add("translate-y-[-28px]")
      //   element?.add("scale-90")
      //   element?.add("z-[2]")
      //   element?.add("bg-white")
      //   element?.add("font-bold")
      // }
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(event)
      //if (active) return handleFocus()
      // if (placeHolderRef?.current) {
      //   const element = placeHolderRef.current?.classList
      //   element?.remove("translate-y-[-28px]")
      //   element?.remove("z-[2]")
      //   element?.remove("bg-white")
      //   element?.remove("scale-90")
      //   element?.remove("font-bold")
      // }
    }

    const getType  = () => {
      if (type === "password") {
        return showText ? "text" : "password"
      }
      return type
    }
    
    return (
      <div className={cn("w-full", wrapperClassName)}>
        <label className={cn("block mb-2 text-sm", type === "select" ? "text-2xl" : "text-base")}> {label} </label>
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={getType()}
          placeholder={placeholder}
          className={cn(
            "rounded-2xl flex h-[56px] w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ",
            className,
            showError ? "text-red-700 border-red-700" : ""
          )}
          ref={ref}
          {...props}  />

          { type === "password" &&
            <div onClick={() => setShowText(!showText)} className="absolute right-3 top-4">
      
            </div>
          }

          {
            showError && <p className="text-red-700">{error}</p>
          }
      </div>
    )
  }
)


export default Input
