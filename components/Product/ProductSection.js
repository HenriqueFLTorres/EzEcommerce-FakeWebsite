import React from 'react'
import ProductCard from './ProductCard';

import styles from './Product.module.css'
import classNames from 'classnames';

const ProductSection = ({ product, filter, colapse }) => {
  return (
    <div className={ classNames( [styles.ProductSection], { [styles.Expand]: colapse } )}>
        {product?.map((productInfo) => {
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
  )
}

export default ProductSection