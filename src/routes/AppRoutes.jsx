import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MainLayout from '../layout/MainLayout'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import PublicRoute from './PublicRoute'
import Cartpage from '../pages/Cartpage'

const Approutes = () => {

  let router= createBrowserRouter([
    {
      path:"/",
      element:<PublicRoute/>,
      children:[
        {
          path:"",
          element:<AuthLayout/>,
          children:[{
  path:"",
  element:<Login/>
},
{
  path:"signup",
  element:<Signup/>
}]
        }

      ]
    },
    {
      element:<ProtectedRoute/>,
      
      children:[
        {
          element:<MainLayout/>,
          children:[
            {
              path:"/home",
              element:<Home/>
            },
             {
      path:"/shop",
      element:<Shop/>
    },
    {
      path:"/cart",
      element:<Cartpage/>
    }
            
          ]
        }
      ]
    }
    
   
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default Approutes
