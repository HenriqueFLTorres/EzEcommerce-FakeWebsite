import React from 'react'
import styles from './ProductDetails.module.css'

const ProductDetails = ({ name, price, rating, image, totalRating, oPrice, stock, images, about, specifications, descImages }) => {
  return (
    <div className={styles.ProductDetails}>
      {name}
    </div>
  )
}

export default ProductDetails