import { BrowserRouter, Route, Routes } from "react-router"
import SignIn from "./components/sign-in/SignIn"
import Dashboard from "./components/home/Dashboard"
import Home from "./components/home/Home"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Adding routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
