import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements , RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import AdminLayout from './AdminLayout.jsx'
import { Login } from './pages'
import { AdminLogin } from './pages/admin'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/login' element={<Login/>}/>
    <Route path="/"  element={<Layout />} >
      <Route path='/' element={<>Logged in</>}/>
    </Route>
    <Route path='/admin/login' element={<AdminLogin/>}/>
    <Route path='admin' element={<AdminLayout />}>
      <Route path='' element={<>Admin</>}/>
    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
