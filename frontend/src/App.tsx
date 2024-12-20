import { BrowserRouter, Route, Routes } from "react-router"
import SignIn from "./components/sign-in/SignIn"
import Home from "./components/home/Home"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Adding routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
