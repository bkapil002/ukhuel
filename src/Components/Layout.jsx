import { Outlet } from "react-router-dom"
import HuelHeader from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
     <HuelHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout