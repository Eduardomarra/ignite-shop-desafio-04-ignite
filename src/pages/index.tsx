import { GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import Stripe from "stripe"

import {useKeenSlider} from 'keen-slider/react'
import { stripe } from "../lib/stripe"

import { HomeContainer, Product } from "../styles/pages/home"
import 'keen-slider/keen-slider.min.css'
import { CartButton } from "../components/CartButton"
import { useCart } from "../hooks/useContext"
import { IProduct } from "../context/CartContext"
import { MouseEvent } from "react"

interface HomeProps {
    products: IProduct[]
}

export default function Home({products}: HomeProps ) {
    const {addCartItem, checkItemInCart} = useCart()

    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 30
        }
    })

    function handleAddCartItem(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
        e.preventDefault()
        if(!checkItemInCart(product.id)) addCartItem(product)
    }

  return (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="language" content="pt-BR" />
            <title>Home | Ignite Shop</title>
            <meta name="description" content="Site de venda da camisetas com estampas divertidas." />
            <meta name="robots" content="index" />
            <meta name="author" content="Eduardo Marra" />
        </Head>

        <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map((product) =>{
                return (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        prefetch={false}
                    >
                        <Product 
                            className="keen-slider__slide" 
                        >
                            <Image 
                                src={product.imageUrl}
                                alt=""
                                width={520}
                                height={480}
                            />
                            <footer>
                                <div>
                                    <strong>{product.name}</strong>
                                    <span>{product.price}</span>
                                </div>
                                <CartButton 
                                    color={'green'} 
                                    size={'md'} 
                                    disabled={checkItemInCart(product.id)}
                                    onClick={(e) => handleAddCartItem(e, product)}
                                />
                            </footer>
                        </Product>
                    </Link>
                )
            }
                
            )}        
        </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })
    const products = response.data.map((product) => {
        const price = product.default_price as Stripe.Price
        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            url: product.url,
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price.unit_amount / 100),
            numberPrice: price.unit_amount / 100,
            defaultPriceId: price.id
        }
    })

    return {
        props: {
            products
         },
         revalidate: 60 * 60 * 2, // 2 hours
    }
}
