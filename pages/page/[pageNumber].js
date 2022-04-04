import React, { useState } from 'react'

import { useRouter } from 'next/dist/client/router'

import Category from '../../components/Category/Category'
import Navbar from '../../components/Navbar/Navbar'
import ProductSection from '../../components/Product/ProductSection'
import Background from '../../svg/Background'

import ProductsList from '../../utils/Products.json'
import { CartHook } from '../../Hooks/CartHook'
import Cart from '../../components/Navbar/Cart'

const category = Array.from( new Set ( ProductsList.map((item) => item.category) ) )


const productPage = ({ cartVisibility, setCartVisibility }) => {
    const [filter, setFilter] = useState({["Category"]: category})
    const [colapse, setColapse] = useState(false)

    const router = useRouter()
  
    return (
      <div className="MainBackground">
        <CartHook>
          <Navbar setCartVisibility={setCartVisibility} />
          <Cart cartVisibility={cartVisibility} setCartVisibility={setCartVisibility}/>
          <div className='Content' >
            <Category filter={filter} setFilter={setFilter} colapse={colapse} setColapse={setColapse} />
            <ProductSection product={ProductsList} filter={filter} colapse={colapse} page={Number(router.query.pageNumber)} />
          </div>
          <Background className="bgSvg"/>
          <Background className="bgSvg"/>
        </CartHook>
      </div>
    )
  }
export default productPage