import React from 'react'

import Products from '../../utils/Products.json'

import styles from './Category.module.css'

const category = Array.from( new Set ( Products.map((item) => item.category) ) )


const Category = () => {
  return (
    <div className={styles.categoryBar}>
      <div className={styles.categoriesFilter}>
        { category.map((category) => <p>{category}</p>) }
      </div>
    </div>
  )
}

export default Category