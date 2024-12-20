import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"
import SidebarMob from "./SidebarMob"

const Home = () => {

    return (
        <div className="flex lg:flex-row flex-col">
            <Sidebar />
            <SidebarMob />
            <div className="flex-grow bg-[#FAFAFA] lg:p-4">
                <Dashboard />
            </div>
        </div>
    )
}

export default Home