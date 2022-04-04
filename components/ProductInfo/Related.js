import React from 'react'

import ProductList from '../../utils/Products.json'
import ProductCard from '../Product/ProductCard.js'

import styles from './Related.module.css'

const Related = () => {

  return (
    <>
      <h1 className={styles.relatedTitle}>More Products</h1>
      <div className={styles.RelatedContainer}>
        { ProductList.slice(5, 9).map((item) => {
          const { name, category, product_id, main_image, rating, original_price, price } = item
          
          return <ProductCard key={product_id} title={name} category={category} image={main_image} price={price} id={product_id} rate={rating} oPrice={original_price} filter={{["Category"]: category, ["Lowest Price"]: 0, ["Highest Price"]: 10000, ["Lowest Rating"]: 0}} />
        })}
      </div>
    </>
  )
}

export default Related