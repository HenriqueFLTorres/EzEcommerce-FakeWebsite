import React, { useContext, useState } from 'react'

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function updateCart() {
    return useContext(CartUpdateContext)
}


export const CartHook = ({ children }) => {
    const [cart, setCart] = useState([])

    return (
        <CartContext.Provider value={[ cart, setCart ]}>
                { children }
        </CartContext.Provider>
    )
}