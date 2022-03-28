import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar/Navbar';
import Shipping from '../../components/ProductInfo/Shipping'
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


  const handleValue = (value, min, max) => {
    let newValue = value
    if ( newValue < min ) newValue = min
    else if ( newValue > max ) newValue = max
    return newValue
  }

  const arrowActivated = (rotation) => classNames( { [styles.option + rotation + Activated]: clicked } )
  

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

                    <div className={styles.buyInfo}>

                      <div className={styles.itemPrice}>
                        { original_price && <h2>$ {original_price}</h2> }
                        <h3>$ {price}</h3>
                      </div>

                      <div className={styles.selectAmount}>
                        <Arrow className={styles.arrow} onClick={(e) => {
                          setItemValue( handleValue(itemValue - 1, 0, 20) )
                          if ( e.target.tagName === "path" ) {
                            e.target.parentNode.classList.add(styles.ActivatedLeft)
                            setTimeout(() => {
                              e.target.parentNode.classList.remove(styles.ActivatedLeft)
                            }, 250);
                          } 
                          else {
                            e.target.classList.add(styles.ActivatedLeft)
                            setTimeout(() => {
                              e.target.classList.remove(styles.ActivatedLeft)
                            }, 250);
                          }
                        }}/>
                        <input value={itemValue} readOnly={true}/>
                        <Arrow className={styles.arrow} onClick={(e) => {
                          setItemValue( handleValue(itemValue + 1, 0, 20) )
                          if ( e.target.tagName === "path" ) {
                            e.target.parentNode.classList.add(styles.ActivatedRight)
                            setTimeout(() => {
                              e.target.parentNode.classList.remove(styles.ActivatedRight)
                            }, 250);
                          } 
                          else {
                            e.target.classList.add(styles.ActivatedRight)
                            setTimeout(() => {
                              e.target.classList.remove(styles.ActivatedRight)
                            }, 250);
                          }
                        }}/>
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

        <div className={styles.aboutSection}>
            <Shipping/>
            <div className={styles.aboutProduct}>
              <div className={styles.descriptionImages}>
                { ProductList.map((item) =>  {
                  const { name, price, product_id, rating, main_image, total_ratings, original_price, in_stock, images, about_product, specifications, options, description_images, reviews } = item
                  
                  return ( Number(router.query.id) === product_id ) && description_images.map((image) => <img className={styles.productImage} src={image} alt={image}/>)
                })}
              </div>
              <div className={styles.moreInfo}>
                { ProductList.map((item) =>  {
                  const { name, price, product_id, rating, main_image, total_ratings, original_price, in_stock, images, about_product, specifications, options, description_images, reviews } = item
                  
                  return (
                    ( Number(router.query.id) === product_id ) && (
                    <>
                      <div className={styles.bulletPoints}>
                        <h1>More Info</h1>
                        { about_product.map((bulletPoint) => <p>• {bulletPoint}</p> ) }
                      </div>
                      <div className={styles.specifications}>
                        <h1>Specifications</h1>
                        { specifications.map((item) => <p>{item}</p>) }
                      </div>
                      <div className={styles.reviews}>
                        <h1>Reviews</h1>
                        { reviews.map((review) => {
                          try {

                            let parse = JSON.parse(review.message)
                          } catch (error) {

                          }
                          return (

                          <div className={styles.reviewFragment}>
                            <h2>{review.title}</h2>
                            <h5>{review.author} - <div className={styles.GoldHighlighted}>{review.rating}</div></h5>
                            <p>{ review.message.replace('\n', "\n") }</p>
                          </div>
                          )
                          })}
                      </div>
                    </>
                    )
                  )
                })}
              </div>
            </div>
        </div>
        {/* <ProductDetails id={router.query.id}/> */}
        {/* <ProductReviews /> */}
        <Background className={styles.bgSvg} />
        <Background className={styles.bgSvg} />
        <Background className={styles.bgSvg} />
        <Background className={styles.bgSvg} />
      </div>
    )
}

export default ProductDetails