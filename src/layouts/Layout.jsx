import { Header,Footer } from "../components"
import { Outlet } from "react-router-dom"
import Cart from "../modals/Cart"
import { Toaster } from "react-hot-toast"

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Toaster/>
      <Header />
      <Cart/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout