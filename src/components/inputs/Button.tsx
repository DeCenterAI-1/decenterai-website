import * as React from "react"
import { cn } from "../../lib/utils";


export interface IProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(({ disabled, className, children, onClick}) => {

    
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cn("rounded-3xl h-[56px] w-full bg-primary-11 disabled:bg-primary-12 disabled:text-primary-7 font-semibold", className)}>
            {children}
        </button>
    )
})


export default Button
