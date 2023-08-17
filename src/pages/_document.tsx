import {Html, Head, Main, NextScript} from 'next/document'
import { getCssText } from '../styles'

export default function Documento(){
    return (
        <Html>
            <Head>
                <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}