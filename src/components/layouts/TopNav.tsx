import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/logo.png"
import { cn } from "../../lib/utils"

const links = [
    {text: "Inferencing", link: "/"},
    {text: "History", link: "/history"},
    {text: "Explore", link: "/explore"}
]

const TopNav = () => {

    const { pathname } = useLocation()

    return (
        <nav className="flex items-center px-10 h-[88px] fixed top-0 left-0">

            <div className="flex items-center">

                <img src={logo} width={156} height={31} />

                <ul className="flex justify-between gap-x-20 ml-20">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link 
                                        className={cn("text-base", pathname === link.link ? "text-primary-1" : "text-primary-7")} 
                                        to={link.link}>{link.text}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

        </nav>
    )
}

export default TopNav