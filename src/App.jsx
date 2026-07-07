import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer"
import HuelHeader from "./Components/Header"
import Home from "./Components/Home";
import AllProducts from "./All Product/AllProducts";
import MoreProtein from "./Yourgoals/MoreProtein";
import EatHealthy from "./Yourgoals/EatHealthy";
import ManageWeight from "./Yourgoals/ManageWeight";
import SaveTime from "./Yourgoals/SaveTime";


function App() {

  return (
    <>
      <Router>

        <HuelHeader />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collections/other-huel-products" element={<AllProducts />} />
          <Route path="/collections/protein-and-fitness" element={<MoreProtein/>}/>
          <Route path="/collections/complete-nutrition" element={<EatHealthy/>}/>
          <Route path="/collections/weight-loss" element={<ManageWeight/>}/>
          <Route path="/collections/eat-on-the-go" element={<SaveTime/>}/>
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
