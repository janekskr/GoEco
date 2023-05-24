import Navbar from "./components/navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Calculator from "./screens/Calculator";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-full bg-[url('/assets/background.svg')] bg-no-repeat bg-cover text-white px-14">
        <Navbar />
        <div className="pt-10">
          <Routes>  
            <Route path="/*" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/calculator/*" element={<Calculator />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
