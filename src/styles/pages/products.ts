import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    justifyContent: "space-between",
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const ImageContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    width: '100%',
    maxWidth: 576,
    height: 656,

    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    img: {
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        marginTop: '1rem',
        display: 'block',
        fontSize: '$2xl',
        color: '$green-300'
    },

    p: {
        color: '$gray300',
        fontSize: '$md',
        lineHeight: 1.6,
        marginTop: '2.5rem',
    },

    button: {
        color: '$white',
        fontSize: '$md',
        fontWeight: 'bold',
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',

        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
            transition: 'background-color 0.2s',
        },

        '&:disabled': {
            'opacity': 0.4,
            cursor: 'not-allowed', 
        }
    },

})