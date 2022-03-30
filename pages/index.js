import react, { useState, useEffect } from 'react'

import Head from 'next/head'

import Category from '../components/Category/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'
// import Logo from '/Logo.png'

import ProductsList from '../utils/Products.json'
import { CartHook } from '../Hooks/CartHook'

const category = Array.from( new Set ( ProductsList.map((item) => item.category) ) )


export default function Home() {
  const [filter, setFilter] = useState({["Category"]: category})


  return (
    <div className="MainBackground">
      <CartHook>
        <Head>
          <title>EzCommerce</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/Logo.png"></link>
        </Head>
        <Navbar/>
        <div className='Content' >
          <Category filter={filter} setFilter={setFilter}/>
          <ProductSection product={ProductsList} filter={filter}/>
        </div>
        <Background className="bgSvg"/>
      </CartHook>
    </div>
  )
}