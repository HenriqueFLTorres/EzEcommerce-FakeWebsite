import React, { useState, useEffect, useLayoutEffect } from 'react'

import Products from '../../utils/Products.json'

import styles from './Category.module.css'
import classNames from 'classnames'

const category = Array.from( new Set ( Products.map((item) => item.category) ) )


const Category = ({ filter, setFilter }) => {
  const [active, setActive] = useState("All Departaments")

  const [lowestPrice, setLowestPrice] = useState(0)
  const [highestPrice, setHighestPrice] = useState(3000)
  const [rating, setRating] = useState(0)

  const categoryName = (categoryItem) => classNames( [styles.categoryItem], { [styles.Active]: categoryItem === active } )

  useEffect(() => {
    setFilter({...filter, ["Lowest Price"]: lowestPrice, ["Highest Price"]: highestPrice, ["Lowest Rating"]: rating})
  }, [lowestPrice, highestPrice, rating])


  return (
    <div className={styles.categoryBar} >
      <div className={styles.categoriesFilter}>
        <p className={categoryName("All Departaments")} onClick={() => { 
          setFilter({...filter, ["Category"]: category})
          setActive("All Departaments")
        }}>All Departaments</p>
        { category.map((categoryItem, index) => <p key={index} className={categoryName(categoryItem)} onClick={() => {
           setFilter({...filter, ["Category"]: categoryItem})
           setActive(categoryItem)
        }}> {categoryItem} </p>) }
      </div> 
      <div className={styles.priceFilter}>
        <div className={styles.LowestPrice}>
          <h3>Lowest Price</h3>
          <input className={styles.DragPriceLow} type="range" min="50" max="1000" step="50" value={lowestPrice}  onChange={(e) => { 
            setLowestPrice(e.target.valueAsNumber)
          }}/>
          <h6>$ {lowestPrice}</h6>
        </div>

        <div className={styles.HighestPrice}>
          <h3>Highest Price</h3>
          <input className={styles.DragPriceHigh} type="range" min="500" max="3000" step="100" value={highestPrice} onChange={(e) => {
             setHighestPrice(e.target.valueAsNumber)
             }}/>
          <h6>$ {highestPrice}</h6>
        </div>
      </div>
      <div className={styles.Ratings}>
          <h3>Ratings Above</h3>
          <input className={styles.DragRating} type="range" min="0" max="5" step="0.1" value={rating} onChange={(e) => {
             setRating(e.target.valueAsNumber)
             }}/>
          <h6>{rating} stars</h6>
        </div>
    </div>
  )
}

export default Category