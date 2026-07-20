import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext()

 export function AuthProvider({children}){


    const [users, setUsers] = useState([])
    const [loggedInUser, setLoggedInUser] = useState(null)
    console.log(loggedInUser);
    

    useEffect(()=>{
        let storedUsers= JSON.parse(localStorage.getItem("skymart_users"))||[];
        if(storedUsers){
            setUsers(storedUsers)
        }

    },[])
    useEffect(()=>{
        let isLoggedUser=JSON.parse(localStorage.getItem("logged_in_user"));
        if(isLoggedUser){
            setLoggedInUser(isLoggedUser)
        }
    },[])

    const signUp=(name,email,password)=>{

       let newUser={
        name,
        email,
        password
       }

        const existUser=users.find((user)=>{
            return user.email===newUser.email

        })
        if(existUser){
            alert("user already exists")
            return;
        }
        else{
            const updatedUser=[...users,newUser];
            setUsers(updatedUser);
            localStorage.setItem("skymart_users",JSON.stringify(updatedUser))
            return 
        }
        
    }
const login=(email,password)=>{
let foundUser= users.find((user)=> user.email===email&& user.password===password)

if(foundUser){
    setLoggedInUser(foundUser);
    localStorage.setItem("logged_in_user",JSON.stringify(foundUser))
    alert("you are logged in")
}
else{
    alert("user not found. please sign in")
}
}

return <AuthContext.Provider value={{signUp},{login}}>{children}</AuthContext.Provider>
} 