import { styled } from "..";

export const SuccessContainer = styled('main',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 656,
    margin: '0 auto',

    h1: {
        color: '$gray100',
        fontSize: '$2xl',
        fontWeight: 700,
        lineHeight: '140%', 
        marginBottom: '1.5rem',
    },

    p: {
        color: '$gray300',
        fontSize: '$xl',
        fontWeight: 400,
        lineHeight: '140%',
        textAlign: 'center',

        maxWidth: 590,
    },

    a: {
        display: 'block',
        color: '$green500',
        fontSize: '$lg',
        fontWeight: 700,
        lineHeight: '160%',
        textDecoration: 'none',

        marginTop: '5.5rem',
    }
})

export const ImagesContainer = styled('section', {
    display: 'flex',
    alignAtems: 'center',
    marginBottom: '3rem',

    'div + div': {
        marginLeft: '-2rem'
    },
}) 

export const ImageContainer = styled('div',{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    maxWidth: 130,
    height: 130,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '50%',
    boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',

    

    img: {
        objectFit: 'cover',
    }
})