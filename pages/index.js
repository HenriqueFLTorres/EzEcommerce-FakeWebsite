import Head from 'next/head'
import Category from '../components/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'

import ProductsList from '../utils/Products.json'

export default function Home() {
  return (
    <div className="MainBackground">
      <Navbar/>
      <ProductSection product={ProductsList}/>
      {/* <Shipping/> */}
      {/* <Background className="bgSvg"/> */}
    </div>
  )
}