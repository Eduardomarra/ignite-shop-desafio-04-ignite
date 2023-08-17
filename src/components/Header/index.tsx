import Image from 'next/image'

import { Handbag } from 'phosphor-react'
import logoImage from '../../assets/logo.svg';

import { HeaderContainer } from './styles';
import Link from 'next/link';
import { Cart } from '../Cart';
import { useRouter } from 'next/router';


export function Header() {
    const { pathname} = useRouter()

    const pathNameSuccess = pathname !== '/success'

    return (
        <HeaderContainer>
            <Link href="/">
                <Image 
                    src={logoImage.src} 
                    alt="logo" 
                    width={130}
                    height={52}
                />
                </Link>

                {pathNameSuccess && ( <Cart /> )}
        </HeaderContainer>
    )
}