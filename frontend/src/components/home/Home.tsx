import { Link } from "react-router"

const Home = () => {

    return (
        <div className="flex flex-col items-center justify-center gap-5 h-screen w-screen">
            <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="CodeAnt AI" className="w-12 h-16" />
                <span className="font-satoshi text-4xl">CodeAnt AI - Assignment</span>
            </div>

            <p className="font-satoshi font-bold">by - Yash Jaiswal</p>

            <div className="flex gap-5 font-inter font-bold mt-5 text-lg">
                <Link to={"/dashboard"}>
                    <button className="border shadow-custom-light py-5 px-10 rounded-lg">Visit Dashboard</button>
                </Link>
                <Link to={"/sign-in"}>
                    <button className="border shadow-custom-light py-5 px-10 rounded-lg">Visit Sign-In</button>
                </Link>
            </div>
        </div>
    )
}

export default Home