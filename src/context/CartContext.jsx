import { createContext, useContext, useState } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [showCart,setShowCart]=useState(false);
    return (
        <CartContext.Provider value={{ showCart, setShowCart }}>
            {children}
        </CartContext.Provider>
        )
}

//hook to acess the showCart state
export const useCart=()=>{
    const context=useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}