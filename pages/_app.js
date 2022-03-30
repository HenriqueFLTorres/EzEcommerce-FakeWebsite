import { CartHook } from '../Hooks/CartHook'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartHook>
      <Component {...pageProps} />
    </CartHook>
  )
}

export default MyApp
