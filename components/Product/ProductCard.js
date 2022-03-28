import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Product.module.css'


const ProductCard = ({ title, image, price, id, rate, oPrice, stock, images, about, specifications, options, descImages, reviews }) => {

  return (
    <div className={styles.ProductCard}>
      <Link href={{
        pathname: "product/[id]",
        query: {
            id: id,
        }
        }}
        as={`product/${id}`} >
        <div className={styles.cardRedirect}>
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
                { oPrice && <p className={styles.originalPrice}>$ {oPrice}</p> }
                <p className={styles.price}>$ {price}</p>
              </div>
              <div className={styles.rate}>
                <p>{rate.replace(/(\s+stars)/g, '').replace(/(\s+out\s+)/g, '').replace(/of/g, ' of')}</p>
                <span className={styles.fullBar}>
                  {/* match function to get the avaliation rate and set the size accoarding */}
                  <span className={styles.ratingBar} style={{ width: `${Number(rate.match(/(\w\.\w)/g)) / 5 * 100}%` }}></span>
                </span>
              </div>
            </footer>
          </div>
        </div>   
      </Link>
      <div className={styles.addCart}>Add to Cart</div>
    </div>
  )
}

export default ProductCard