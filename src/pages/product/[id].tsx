import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/products'
import Image from 'next/image'

import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCart } from '../../hooks/useContext'
import { IProduct } from '../../context/CartContext'

interface ProductProps {
    product: IProduct
}


export default function Product({product}: ProductProps) {   
    const {addCartItem, checkItemInCart} = useCart()

    const {isFallback} = useRouter()

    if(isFallback) {
        return <p>Carregando...</p>
    }

    const cartProductExists = checkItemInCart(product.id)

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="language" content="pt-BR" />
                <title>{product.name} | Ignite Shop</title>
                <meta name="robots" content="index" />
                <meta name="author" content="Eduardo Marra" />
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image 
                        src={product.imageUrl}
                        width={520}
                        height={480}
                        alt=""
                    />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>
                    {product.description}
                    </p>
                    <button 
                        onClick={() => addCartItem(product)}
                        disabled={cartProductExists}
                    >
                        {cartProductExists ? 'Item adicionado ao carrinho' : 'Adicionar ao carrinho'}
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const products = await stripe.products.list();

    const paths = products.data.map(product => {
        return {
            params: {
                id: product.id
            }
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<any,{id: string}> = async ({params}) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId,{
        expand: ['default_price'],
    });
    
    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                url: product.url,
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(price.unit_amount / 100),
                description: product.description,
                numberPrice: price.unit_amount / 100,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}