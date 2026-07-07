import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer"
import HuelHeader from "./Components/Header"
import Home from "./Components/Home";
import AllProducts from "./All Product/AllProducts";
import MoreProtein from "./Yourgoals/MoreProtein";
import EatHealthy from "./Yourgoals/EatHealthy";
import ManageWeight from "./Yourgoals/ManageWeight";
import SaveTime from "./Yourgoals/SaveTime";
import Powdered from "./ShopYour/Powdered";
import Bundles from "./ShopYour/Bundles";
import ReadToDrink from "./ShopYour/ReadToDrink";
import MealReplacement from "./ShopYour/MealReplacement";
import HotInstant from "./ShopYour/HotInstant";
import GreensSuperfoods from "./ShopYour/GreensSuperfoods";
import DrinksSnacks from "./ShopYour/DrinksSnacks";


function App() {

  return (
    <>
      <Router>

        <HuelHeader />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/collections/protein-and-fitness" element={<MoreProtein/>}/>
          <Route path="/collections/complete-nutrition" element={<EatHealthy/>}/>
          <Route path="/collections/weight-loss" element={<ManageWeight/>}/>
          <Route path="/collections/eat-on-the-go" element={<SaveTime/>}/>

          <Route path="/collections/huel-powder" element={<Powdered/>}/>
          <Route path="/collections/bundles" element={<Bundles/>}/>
          <Route path="/collections/huel-rtd" element={<ReadToDrink/>}/>
          <Route path="/shakes" element={<MealReplacement/>}/>
          <Route path="/collections/huel-instant-mealsr" element={<HotInstant/>}/>
          <Route path="/collections/greens-superfoods" element={<GreensSuperfoods/>}/>
          <Route path="/collections/drinks-snacks" element={<DrinksSnacks/>}/>
        </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App
