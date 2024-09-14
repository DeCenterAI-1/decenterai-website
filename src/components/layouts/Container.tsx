import { ReactNode } from "react"


const Container = ({children}: {children: ReactNode}) => {

    return (
        <div className="flex justify-center">

            <div className="max-w-[1440px] flex flex-col items-center justify-center text-white">{children}</div>
            
        </div>
    )
}

export default Container