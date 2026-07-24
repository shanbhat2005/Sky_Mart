import { createContext, useState } from "react";

export const Auth= createContext()

export const AuthProvider=({children})=>{

    const [skyMartUsers, setSkyMartUsers] = useState(JSON.parse(localStorage.getItem("skyMartUsers"))||[])
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser"))||null)

return <Auth.Provider value={{skyMartUsers,setSkyMartUsers,loggedInUser,setLoggedInUser}} >{children}</Auth.Provider>
}