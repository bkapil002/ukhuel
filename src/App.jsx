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
import Science from "./Science/Science";
import MixAndMatchPage from "./Page/mix-and-match/MixAndMatchPage";
import PurchaseOptions from "./Page/mix-and-match/PurchaseOptions";
import { MixAndMatchProvider } from "./Page/mix-and-match/MixAndMatchContext";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Layout from "./Components/Layout";


function App() {

  return (
    <>
     <Router>
      <MixAndMatchProvider>
        <Routes>

         
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route path="/collections/protein-and-fitness" element={<MoreProtein />} />
            <Route path="/collections/complete-nutrition" element={<EatHealthy />} />
            <Route path="/collections/weight-loss" element={<ManageWeight />} />
            <Route path="/collections/eat-on-the-go" element={<SaveTime />} />
            <Route path="/collections/huel-powder" element={<Powdered />} />
            <Route path="/collections/bundles" element={<Bundles />} />
            <Route path="/collections/huel-rtd" element={<ReadToDrink />} />
            <Route path="/shakes" element={<MealReplacement />} />
            <Route path="/collections/huel-instant-mealsr" element={<HotInstant />} />
            <Route path="/collections/greens-superfoods" element={<GreensSuperfoods />} />
            <Route path="/collections/drinks-snacks" element={<DrinksSnacks />} />
            <Route path="/pages/health-benefits" element={<Science />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          
          <Route path="/mix-and-match" element={<MixAndMatchPage />} />
          <Route path="/mix-and-match/purchase-options" element={<PurchaseOptions />} />

        </Routes>
      </MixAndMatchProvider>
     </Router>
    </>
  )
}

export default App
