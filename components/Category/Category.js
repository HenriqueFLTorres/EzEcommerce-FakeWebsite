import React, { useState, useEffect, useLayoutEffect } from 'react'

import Products from '../../utils/Products.json'

import styles from './Category.module.css'

const category = Array.from( new Set ( Products.map((item) => item.category) ) )


const Category = ({ filter, setFilter }) => {

  console.log(filter["Category"]);

  useEffect(() => {
    setFilter({["Category"]: category, ["Lowest Price"]: 0, ["Highest Price"]: 3000})
  }, [])


  console.log(filter);
  return (
    <div className={styles.categoryBar}>
      <div className={styles.categoriesFilter}>
        <p onClick={() => setFilter({...filter, ["Category"]: category})} >All Departaments</p>
        { category.map((categoryItem, index) => <p key={index} onClick={() => setFilter({...filter, ["Category"]: categoryItem})}>{categoryItem}</p>) }
      </div>
      <div className={styles.priceFilter}>
        <p>Lowest Price</p>
        <input className={styles.DragPriceLow} type="range" min="0" max="1000" step="50" value={filter["Lowest Price"]}  onChange={(e) => setFilter({...filter, ["Lowest Price"]: e.target.valueAsNumber})}/>
        <p>$ {filter["Lowest Price"]}</p>

        <p>Highest Price</p>
        <input className={styles.DragPriceHigh} type="range" min="500" max="3000" step="100" value={filter["Highest Price"]} onChange={(e) => setFilter({...filter, ["Highest Price"]: e.target.valueAsNumber})}/>
        <p>$ {filter["Highest Price"]}</p>
      </div>
    </div>
  )
}

export default Category