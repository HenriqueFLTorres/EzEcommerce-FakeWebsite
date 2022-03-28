import React, { useState } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar/Navbar';
import ProductReviews from '../../components/ProductInfo/ProductReviews';

import Arrow from '../../svg/Arrow.js'

import ProductList from '../../utils/Products.json'


import classNames from 'classnames';
import styles from '../../components/ProductInfo/ProductDetails.module.css'
import Background from '../../svg/Background';


const ProductDetails = () => {
  const [imageIndex, setImageIndex] = useState(0)
  const [itemValue, setItemValue] = useState(0)
  const router = useRouter()


  const handleValue = (value) => {
    let newValue = value
    if ( newValue < 0 ) newValue = 0
    else if ( newValue > 20 ) newValue = 20
    return newValue
  }

    return (
      <div className="MainBackground">
        <Navbar/>
        { ProductList.map((item) =>  {
        const { name, price, product_id, rating, main_image, total_ratings, original_price, in_stock, images, about_product, specifications, options, description_images, reviews } = item

        return (
        ( Number(router.query.id) === product_id ) && (


          <header className={styles.productHeader} key={product_id} >
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

                    <div className={styles.buyInfo}>

                      <div className={styles.itemPrice}>
                        { original_price && <h2>$ {original_price}</h2> }
                        <h3>$ {price}</h3>
                      </div>

                      <div className={styles.selectAmount}>
                        <Arrow className={styles.arrow} onClick={() => setItemValue(  handleValue(itemValue - 1)  )}/>
                        <input value={itemValue} readOnly={true}/>
                        <Arrow className={styles.arrow} onClick={() => setItemValue(  handleValue(itemValue + 1)  )}/>
                      </div>

                      <button className={styles.addCart}>Add to Cart</button>

                    </div>

                    <div className={styles.productComplementar}>

                        <div className={styles.productAwards}>
                          <p>#1,010 in Computers & Accessories</p>
                          <p>#94 in Traditional Laptop Computers</p>
                        </div>
                        <div className={styles.rate}>
                          <span className={styles.fullBar}>
                            {/* match function to get the avaliation rate and set the size accoarding */}
                            <span className={styles.ratingBar} style={{ width: `${Number(rating.match(/(\w\.\w)/g)) / 5 * 100}%` }}></span>
                          </span>
                          <p><strong>{rating}</strong> stars</p>
                          <p><strong>{total_ratings}</strong> ratings</p>
                        </div>

                    </div>
                

                

                
                
              </div>

            </div>
          </header>



        )) }) }
        {/* <ProductDetails id={router.query.id}/> */}
        {/* <ProductReviews /> */}
        <Background className={styles.bgSvg} />
      </div>
    )
}

export default ProductDetails