import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";

const MainLayout = () => {

    return (
        <main>
            <TopNav/>
            <div className="flex flex-col  mt-[88px] w-screen items-center">
                <Outlet />
            </div>
        </main>
    );
}

export default MainLayout