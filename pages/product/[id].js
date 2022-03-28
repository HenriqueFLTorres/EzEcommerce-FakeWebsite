import React, { useState } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar/Navbar';
import ProductReviews from '../../components/ProductInfo/ProductReviews';

import Arrow from '../../svg/Arrow.js'

import ProductList from '../../utils/Products.json'


import classNames from 'classnames';
import styles from '../../components/ProductInfo/ProductDetails.module.css'


const ProductDetails = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const router = useRouter()


    return (
      <div className="MainBackground">
        <Navbar/>
        { ProductList.map((item) =>  {
        const { name, price, product_id, rating, main_image, total_ratings, original_price, in_stock, images, about_product, specifications, options, description_images, reviews } = item

        return (
        ( Number(router.query.id) === product_id ) && (


          <header className={styles.productHeader} >
            <div className={styles.title}>{name}</div>
            <div className={styles.mainProductInfo}>

              <div className={styles.images}>
                { images.map((image, index) => imageIndex === index && (
                  <div className={styles.mainImageContainer} key={index}>
                    <img className={styles.selectedImage} src={image} alt={index} />
                    <img className={styles.selectedImageBlur} src={image} alt={index} />
                  </div>
                )) }
                <div className={styles.tinyImagesContainer} >
                  { images.map((image, index) => 
                      <div key={index} className={styles.tinyImageFrame} onClick={() => setImageIndex(index)}>
                        <img className={styles.tinyImages} src={image} alt={index} />
                      </div>
                  ) }
                </div>
              </div>
              <div className={styles.productBuy}>

                <div className={styles.productAwards}>
                  <p>#1,010 in Computers & Accessories</p>
                  <p>#94 in Traditional Laptop Computers</p>
                </div>

                <div className={styles.selectAmount}>
                  <Arrow/>
                  <input/>
                  <Arrow/>
                </div>

                <button className={styles.addCart}>Add to Cart</button>

                <div className={styles.rate}>
                <p>{rating.replace(/(\s+stars)/g, '').replace(/(\s+out\s+)/g, '').replace(/of/g, ' of')}</p>
                  <span className={styles.fullBar}>
                    {/* match function to get the avaliation rate and set the size accoarding */}
                    <span className={styles.ratingBar} style={{ width: `${Number(rating.match(/(\w\.\w)/g)) / 5 * 100}%` }}></span>
                  </span>
                </div>
                
              </div>

            </div>
          </header>



        )) }) }
        {/* <ProductDetails id={router.query.id}/> */}
        {/* <ProductReviews /> */}

      </div>
    )
}

export default ProductDetails