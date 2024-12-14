import React from 'react'
import ReactDOM from 'react-dom/client'



import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Component/Home/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Mens from './Component/Home/Mens'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : "",
        element : <Home/>,
       
      },
      {
        path : "about",
        element : <About/>
      },
      {
        path : "contact",
        element : <Contact/>
      },
      {
        path : "women/shoes",
        element : <Mens/>
      },

    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
