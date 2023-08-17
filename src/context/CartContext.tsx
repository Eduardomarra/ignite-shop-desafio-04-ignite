import { ReactNode, createContext, useState } from "react";

export interface IProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string
    numberPrice: number
    defaultPriceId: string
}

interface CartContextType {
    cartItems: IProduct[]
    cartItemsTotal: number
    addCartItem: (product: IProduct) => void
    checkItemInCart: (id: string) => boolean
    removeCartItems: (id: string) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<IProduct[]>([])

    const cartItemsTotal = cartItems.reduce((acc, product) => {
        return acc + Number(product.numberPrice)
    }, 0)

    function addCartItem(product: IProduct) {
        setCartItems((state) => [...state, product])
    }

    function removeCartItems(id: string) {
        return setCartItems((state) => state.filter((product) => product.id !== id))
    }

    function checkItemInCart(id: string) {
        return cartItems.some((product) => product.id === id)
    }

    return (
        <CartContext.Provider value={{ 
            cartItems,
            cartItemsTotal,
            addCartItem, 
            checkItemInCart, 
            removeCartItems 
        }}>
            {children}
        </CartContext.Provider>
    )
}