import Repositories from "./Repositories"
import Sidebar from "./Sidebar"
import SidebarMob from "./SidebarMob"

const Dashboard = () => {

    return (
        <div className="flex lg:flex-row flex-col">
            <Sidebar />
            <SidebarMob />
            <div className="flex-grow bg-[#FAFAFA] lg:p-4">
                <Repositories />
            </div>
        </div>
    )
}

export default Dashboard;