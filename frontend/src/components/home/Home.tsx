import Dashboard from "./Dashboard"
import Sidebar from "./Sidebar"

const Home = () => {

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-grow bg-[#FAFAFA] p-4">
                <Dashboard />
            </div>   
        </div>
    )
}

export default Home