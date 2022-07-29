import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/index.css'
import '../events/custom.js'
import "../events/login.js"

function MyApp({ Component, pageProps }: AppProps) {
return (
<>  
    <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" type="imagem/png" href="img/logoP.png" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"/>
        <script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
        <link href="img/themify-icons/themify-icons.css" rel="stylesheet" />
        <link href="img/font-awesome/css/fontawesome-all.min.css" rel="stylesheet" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <link href="styles/style.min.css" rel="stylesheet"></link>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
</Head>

  <Component {...pageProps} />

</>
)
}

export default MyApp
