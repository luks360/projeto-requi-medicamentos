import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import '../styles/index.css'
import Script from 'next/script'

function MyApp({ Component, pageProps: { session, ... pageProps} }: AppProps) {
return (
<>  
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"/>
    <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></Script>
    <Script src="https://accounts.google.com/gsi/client" async defer></Script>
    <Script src="https://apis.google.com/js/platform.js" async defer></Script>
    <Script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></Script>
    
    
    {/* <SessionProvider session={session}> */}
        <Component {...pageProps} />
    {/* </SessionProvider> */}
</>
)
}

export default MyApp
