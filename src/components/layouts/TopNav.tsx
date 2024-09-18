import { Link, useLocation } from "react-router-dom"
import logo from "@assets/logo.png"
import { cn } from "../../lib/utils"
import { ConnectKitButton } from "connectkit"

const links = [
    {text: "Inferencing", link: "/"},
    {text: "History", link: "/history"},
    {text: "Explore", link: "/explore"}
]

const TopNav = () => {

    const { pathname } = useLocation()

    return (
        <nav className="flex justify-between items-center sm:px-6 md:px-10 h-[88px] w-full fixed top-0 left-0">

            <div className="flex items-center">

                <Link to={"/"}> <img src={logo} width={156} height={"auto"} className="w-32 sm:w-40" /></Link>
     
                <ul className="hidden sm:flex justify-between gap-x-2 sm:gap-x-10 lg:gap-x-20 ml-20">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link 
                                        className={cn("text-base", pathname === link.link ? "text-primary-1" : pathname.includes("inferencing") ? "text-primary-1" : "text-primary-7")} 
                                        to={link.link}>{link.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

            <ConnectKitButton />

        </nav>
    )
}

export default TopNav