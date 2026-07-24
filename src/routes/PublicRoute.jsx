import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/Authcontext'

const PublicRoute = () => {
    

    let {loggedInUser}= useContext(Auth)

    console.log(loggedInUser);
     if(loggedInUser){
        return <Navigate to={"/home"}/>
    }
  return (
      <Outlet/>
  )
}

export default PublicRoute
