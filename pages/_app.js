import react, { useState } from 'react'
import { CartHook } from '../Hooks/CartHook'
import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [cartVisibility, setCartVisibility] = useState(false)

  return (
    <CartHook>
      <Head>
          <title>EzCommerce</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/Logo.png"></link>
        </Head>
      <Component {...pageProps} cartVisibility={cartVisibility} setCartVisibility={setCartVisibility} />
    </CartHook>
  )
}

export default MyApp
