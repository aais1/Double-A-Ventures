import { Header,Footer } from "../components"
import { Outlet } from "react-router-dom"
import Cart from "../modals/Cart"

const Layout = () => {
  return (
    <>
      <Header />
      <Cart/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout