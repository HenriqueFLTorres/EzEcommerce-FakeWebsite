import React from 'react'
import Image from 'next/image'
import styles from './Product.module.css'


const ProductCard = ({ title, image, price, id, rate }) => {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.ProductCardImage}>
        <img className={styles.ImageView} src={image} alt={title} />
        <img className={styles.ImageBlur} src={image} alt={title} />
      </div>
        <div className={styles.ProductCardInfo}>
          <header>
            <h4 className={styles.title}>{title}</h4>
          </header>
          <footer>
            <div className={styles.prices}>
              <p className={styles.originalPrice}>R$ {price - 1000}</p>
              <p className={styles.price}>R$ {price}</p>
            </div>
            <div className={styles.rate}>
              <p>{rate}</p>
              <span className={styles.fullBar}>
                <span className={styles.ratingBar} style={{ width: `${rate / 5 * 100}%` }}>

                </span>
              </span>
            </div>
          </footer>
        </div>
    </div>
  )
}

export default ProductCard