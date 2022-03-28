import React from 'react'
import ProductCard from './ProductCard';
import styles from './Product.module.css'

const ProductSection = ({ product }) => {
  return (
    <div className={styles.ProductSection}>
        {product?.map((productInfo) => {
            const { name, price, product_id, rating, main_image, total_ratings, original_price, in_stock, images, about_product, specifications, options, description_images, reviews } = productInfo

            return <ProductCard 
                      title={name}
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
                      reviews={reviews} />
        })}
    </div>
  )
}

export default ProductSection