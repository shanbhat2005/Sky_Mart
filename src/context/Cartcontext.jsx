import { createContext, useState } from "react";

export const Cart=createContext()

export const CartProvider=({children})=>{

const [cart, setCart] = useState([])
console.log(cart);

const addToCart=(product)=>{
    const exist= cart.find((item)=>{
return item.id===product.id
    })

    if(exist){
       const updatedCart=cart.map((item)=>{
        if(product.id===item.id){
            return {...item,quantity:item.quantity+1}
        }
        return item
       })
       setCart(updatedCart)
    }
    else{
        setCart([...cart,{...product,quantity:1}])

    }
    console.log(exist);
    

}



    return <Cart.Provider value={{cart,setCart,addToCart}}>{children}</Cart.Provider>
}