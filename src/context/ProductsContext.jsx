import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Product=createContext()

export const ProductProvider=({children})=>{

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("productsData"))||[])

const getProducts=async ()=>{
    try {
        let res= await axios.get("https://fakestoreapi.com/products");
let pData=res.data
    setProducts(pData)
    localStorage.setItem("productData",JSON.stringify(pData));

    
    } catch (error) {
        console.log("errors->",error);
        
    }
    

}

useEffect(()=>{
    getProducts()

},[])
    return <Product.Provider value={{products}}>{children}</Product.Provider>
}