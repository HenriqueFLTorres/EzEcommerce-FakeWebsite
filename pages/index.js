import Head from 'next/head'
import Category from '../components/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'
import Shipping from '../components/ProductInfo/Shipping.js'

// import { fetchApi, baseUrl } from '../utils/fetchApi'

export default function Home({ product }) {

  return (
    <div className="MainBackground">
      <Navbar/>
      {/* <ProductSection product={product}/> */}
      <Shipping/>
      <Background className="bgSvg"/>
    </div>
  )
}



// export async function getStaticProps() {
//   const product = await fetchApi(`${baseUrl}/api/product`)

//   return {
//     props: {
//       product: product,
//     }
//   }
// }