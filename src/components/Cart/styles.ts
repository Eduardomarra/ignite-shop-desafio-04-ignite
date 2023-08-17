import { styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog"


export const CartContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,

    display: 'flex',
    flexDirection: 'column',

    backgroundColor: '$gray800',
    boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
    width: '30rem',
    height: '100vh',

    padding: '1.5rem 1.5rem 3rem 3rem',

    h2: {
        color: '$gray100',
        fontSize: '$lg',
        fontWeight: 700,
        lineHeight: '160%',
        margin: '4.5rem 0 2rem 0',
    },

    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1,
        overflowY: 'auto',
    }
})

export const CartClose = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
    
    color: '$gray500',
    background: 'none',
    border: 'none',
})

export const CartProduct = styled('div', {
    display: 'flex',
    gap: 10,

    width: '100%',
    height: '5.815rem',

})

export const CartProductImage = styled('div', {
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    img: {
        objectFit: 'cover',
    },
})

export const CartProductDetail = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    p: {
        color: '$gray300',
        fontSize: '$md',
        fontWeight: 400,
        lineHeight: '160%',
    },

    span: {
        color: '$gray100',
        fontSize: '$md',
        fontWeight: 700,
        lineHeight: '160%',
    },

    button: {
        color: '$green500',
        fontFamily: 'Roboto',
        fontSize: '$sm',
        fontWeight: 'bold',
        lineHeight:' 160%',
        textAlign: 'left',

        width: '100%',

        background: 'none',
        border: 'none',
        marginTop: '0.5rem',
    },
})

export const CartFinalization = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 'auto',

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        color: '$white',
        fontSize: '$lg',
        fontWeight: 700,
        lineHeight: '160%',
        background: '$green500',

        width: '100%',
        padding: '20px 32px',
        borderRadius: 8,

        '&:not(:disabled):hover': {
            background: '$green300',
            transition: 'background 0.2s',
        },

        '&:disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        }
    },
})

export const CartFinalizationDetail = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    marginBottom: 55,

    div: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        color: '$gray100',

        '&:last-child': {
            fontSize: '$lg',
            fontWeight: 700,

            p: {
                fontSize: '$xl',
            }
        }
    }
})