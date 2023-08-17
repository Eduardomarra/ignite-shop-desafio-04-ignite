import { styled } from "@stitches/react";

export const CartButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: 'none',
    borderRadius: 8,
    position: 'relative',

    background: '$gray800',
    color: '$gray500',

    padding: '0.85rem',
    marginLeft: 'auto',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
    },

    variants: {
        color: {
            gray: {
                color: '$gray500',
                background: '$gray800',
            },
            green: {
                color: '$white',
                background: '$green500',

                '&:not(:disabled):hover': {
                    background: '$green300',
                    transition: 'background 0.2s',
                }
            }
        },

        size: {
            sm: {
                width: '3rem',
                height: '3rem',

                svg: {
                    fontSize: 24,
                }
            },
            md: {
                width: '4rem',
                height: '4rem',

                svg: {
                    fontSize: 32,
                }
            },
        }
    },

    defaultVariants: {
        color: 'gray',
        size: 'sm',
    }
})