import react, { useState } from 'react'

import Category from '../components/Category/Category'
import Navbar from '../components/Navbar/Navbar'
import ProductSection from '../components/Product/ProductSection'
import Background from '../svg/Background'
// import Logo from '/Logo.png'

import ProductsList from '../utils/Products.json'
import { CartHook } from '../Hooks/CartHook'
import Cart from '../components/Navbar/Cart'

const category = Array.from( new Set ( ProductsList.map((item) => item.category) ) )


export default function Home({ cartVisibility, setCartVisibility }) {
  const [filter, setFilter] = useState({["Category"]: category})


  


  return (
    <div className="MainBackground">
      <CartHook>
        <Navbar setCartVisibility={setCartVisibility} />
        <Cart cartVisibility={cartVisibility} setCartVisibility={setCartVisibility}/>
        <div className='Content' >
          <Category filter={filter} setFilter={setFilter}/>
          <ProductSection product={ProductsList} filter={filter}/>
        </div>
        <Background className="bgSvg"/>
      </CartHook>
    </div>
  )
}