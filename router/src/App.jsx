import Navbar from "./Navbar"
import Contacts from "./pages/Contacts"
import Home from "./pages/Home"
import About from "../src/pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App