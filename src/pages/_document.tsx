import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang="es-MX">
            <Head>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export default Document;