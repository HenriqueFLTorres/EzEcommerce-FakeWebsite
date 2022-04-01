import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Product.module.css'
import { updateCart, useCart } from '../../Hooks/CartHook'


const ProductCard = ({ title, category, image, price, id, rate, oPrice, stock, images, about, specifications, options, descImages, reviews, filter }) => {

  const [cart, cartUpdater] = useCart()

  return ( (filter["Lowest Price"] <= price) && (price <= filter["Highest Price"]) &&  filter["Category"].includes(category) && ( Number(rate.replace(/\s+of\s+\d/g, '')) > filter["Lowest Rating"] ) && (
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
              <h4 className={styles.title}>{title.substring(0, 40)}</h4>
              <h6 className={styles.category}>{category}</h6>
            </header>

            <footer>
              <div className={styles.prices}>
                { oPrice && <p className={styles.originalPrice}>$ {oPrice}</p> }
                <p className={styles.price}>$ {price}</p>
              </div>
              <div className={styles.rate}>
                <p>{rate}</p>
                <span className={styles.fullBar}>
                  {/* match function to get the avaliation rate and set the size accoarding */}
                  <span className={styles.ratingBar} style={{ width: `${Number(rate.match(/(\w\.\w)/g)) / 5 * 100}%` }}></span>
                </span>
              </div>
            </footer>
          </div>
        </div>   
      </Link>
      <div className={styles.addCart} onClick={() => { 

          cartUpdater({...cart, [id]: {title, id, image, price, ["amount"] : 1} })

          // if Cart already have a current product, a amount of current product will be increased
          if ( cart.hasOwnProperty(id) ) cartUpdater({...cart, [id]: {...cart[id], amount: cart[id].amount + 1} })

       }} >Add to Cart</div>
    </div>
  )
  )
}

export default ProductCard