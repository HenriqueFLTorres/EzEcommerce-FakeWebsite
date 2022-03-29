import react, { useState, useEffect } from 'react'

import Category from '../components/Category/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'

import ProductsList from '../utils/Products.json'

const category = Array.from( new Set ( ProductsList.map((item) => item.category) ) )


export default function Home() {
  const [filter, setFilter] = useState({["Category"]: category})


  return (
    <div className="MainBackground">
      <Navbar/>
      <div className='Content' >
        <Category filter={filter} setFilter={setFilter}/>
        <ProductSection product={ProductsList} filter={filter}/>
      </div>
      <Background className="bgSvg"/>
    </div>
  )
}