import react, { useState } from 'react'

import Category from '../components/Category/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'

import ProductsList from '../utils/Products.json'

export default function Home() {
  const [search, setSearch] = ('')

  console.log(search);
  return (
    <div className="MainBackground">
      <Navbar setSearch={setSearch}/>
      <div className='Content'>
        <Category/>
        <ProductSection product={ProductsList}/>
      </div>
      <Background className="bgSvg"/>
    </div>
  )
}