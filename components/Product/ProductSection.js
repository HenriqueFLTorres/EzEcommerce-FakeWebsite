import React from 'react'
import ProductCard from './ProductCard';

import Link from 'next/link'

import styles from './Product.module.css'
import classNames from 'classnames';

const ProductSection = ({ product, filter, colapse, page }) => {
  
  let singlePage = product.slice(12 * (page - 1), 12 * page)

  return (
    <div className={ classNames( [styles.ProductList], { [styles.Expand]: colapse } )}>
      <div className={styles.ProductSection}>
          {singlePage?.map((productInfo) => {
              const { name, price, category, product_id, rating, main_image, total_ratings, original_price, in_stock, images, about_product, specifications, options, description_images, reviews } = productInfo

              return <ProductCard 
                        key={product_id}
                        title={name}
                        category={category}
                        id={product_id} 
                        rate={rating}
                        totalRating={total_ratings} 
                        image={main_image} 
                        price={price} 
                        oPrice={original_price}
                        stock={in_stock}
                        images={images}
                        about={about_product}
                        specifications={specifications}
                        options={options}
                        descImages={description_images}
                        reviews={reviews}
                        filter={filter}
                        />
          })}
      </div>
      <div className={styles.pageSelector}>
        <Link href="/">
          <button>Prev Page</button>
        </Link>
          <h5><span className={styles.Bold}>Total Pages: </span>2</h5>
        <Link href="/page/2">
          <button>Next Page</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductSection