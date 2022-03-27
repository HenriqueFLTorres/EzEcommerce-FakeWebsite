import Head from 'next/head'
import Category from '../components/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'

// import { fetchApi, baseUrl } from '../utils/fetchApi'

export default function Home({ product }) {

  return (
    <div className="MainBackground">
      <Navbar/>
      <Category/>
      <ProductSection product={product}/>
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