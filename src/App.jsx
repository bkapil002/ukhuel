import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer"
import HuelHeader from "./Components/Header"
import Home from "./Components/Home";


function App() {

  return (
    <>
      <Router>

        <HuelHeader />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
