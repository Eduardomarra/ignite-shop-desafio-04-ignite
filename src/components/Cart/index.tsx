import * as Dialog from "@radix-ui/react-dialog"

import { CartButton } from "../CartButton"
import { CartClose, CartContent, CartFinalization, CartFinalizationDetail, CartProduct, CartProductDetail, CartProductImage } from "./styles"
import { X } from "phosphor-react"
import Image from "next/image"

import { useCart } from "../../hooks/useContext"
import axios from "axios"
import { useState } from "react"

export function Cart() {
    const { cartItems, cartItemsTotal, removeCartItems } = useCart()
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const cartQuantity = cartItems.length
    const cartItemsTotalFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(cartItemsTotal)

    function handleRemoveCartItem(id: string) {
        removeCartItems(id)
    }

    async function handleCheckout() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout/', {
                products: cartItems
            })

            const { checkoutUrl } = response.data
            window.location.href = checkoutUrl
        } catch (error) {
            setIsCreatingCheckoutSession(false)
            alert(error.message)
        }
    }

    return (
        <Dialog.Root>
        <Dialog.Trigger asChild >
            <CartButton color={'gray'} size={"sm"} />
        </Dialog.Trigger>
        <Dialog.Portal>
         <CartContent>
            <CartClose>
                <X size={24} weight="bold"/>
            </CartClose>

            <h2>Sacola de compras</h2>
            <section>
                {cartQuantity === 0 ? 'Sua sacola está vazia :(' : ''}
                { cartItems.map((item) => (
                    <CartProduct key={item.id}>
                        <CartProductImage >
                            <Image src={item.imageUrl} alt="" width={95} height={95}/>
                        </CartProductImage>
                        <CartProductDetail>
                            <p>{item.name}</p>
                            <span><strong>{item.price}</strong></span>
                            <button onClick={() => handleRemoveCartItem(item.id)}>Remover</button>
                        </CartProductDetail>
                    </CartProduct>
                ))}
            </section>
            <CartFinalization>
                <CartFinalizationDetail>
                    <div>
                        <span>Quantidade</span>
                        <p>{cartQuantity} {cartQuantity > 1 ? 'unidades' : 'unidade'}</p>
                    </div>
                    <div>
                        <span>valor Total</span>
                        <p>{cartItemsTotalFormatted}</p>
                    </div>
                </CartFinalizationDetail>
                <button onClick={handleCheckout} disabled={isCreatingCheckoutSession || cartItemsTotal <= 0}>
                    Finalizar compra
                </button>
            </CartFinalization>
         </CartContent>
        </Dialog.Portal>
      </Dialog.Root>
    )
}