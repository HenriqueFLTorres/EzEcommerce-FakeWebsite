import Head from 'next/head'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import ProductSection from '../components/ProductSection'

// import { fetchApi, baseUrl } from '../utils/fetchApi'

export default function Home({ product }) {

  return (
    <div className="MainBackground">
      <Navbar/>
      <Category/>
      <ProductSection product={product}/>
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