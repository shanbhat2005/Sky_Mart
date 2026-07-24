import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/Authcontext'

const ProtectedRoute = () => {
    

    let {loggedInUser}= useContext(Auth)
    console.log(loggedInUser);
     if(!loggedInUser){
        return <Navigate to={"/"}/>
    }
  return (
      <Outlet/>
  )
}

export default ProtectedRoute
