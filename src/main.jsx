import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";
import AdminLayout from "./layouts/AdminLayout.jsx";
import {
  Login,
  Home,
  Product,
  Clothing,
  Book,
  Electronics,
  HomeKitchen,
  BeautyPersonal,
  SportsOutdoor,
  HealthWellness,
} from "./pages";
import {
  AdminLogin,
  AllProducts,
  ProductListing,
  Users,
  Orders,
} from "./pages/admin";
import NotFound from "./pages/admin/NotFound.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import ToysGames from "./pages/ToysGames.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/clothing" element={<Clothing />} />
        <Route path="/products/books" element={<Book />} />
        <Route path="/products/electronics" element={<Electronics />} />
        <Route path="/products/home & kitchen" element={<HomeKitchen />} />
        <Route
          path="/products/beauty & personal care"
          element={<BeautyPersonal />}
        />
        <Route path="/products/sports & outdoors" element={<SportsOutdoor />} />
        <Route path="/products/toys & games" element={<ToysGames />} />
        <Route
          path="/products/health & wellness"
          element={<HealthWellness />}
        />
      </Route>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="admin/dashboard" element={<AdminLayout />}>
        <Route path="" element={<AllProducts />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="product-listings" element={<ProductListing />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);
