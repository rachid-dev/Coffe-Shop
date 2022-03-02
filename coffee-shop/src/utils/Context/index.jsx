import { createContext, useState } from "react";

export const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, updateCart] = useState([])
    const [isOpen, setIsOpen] = useState(true)

    return(
        <cartContext.Provider value = {{cart, updateCart, isOpen, setIsOpen}}>
            {children}
        </cartContext.Provider>
    )
}