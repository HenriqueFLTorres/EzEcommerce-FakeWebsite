import React from 'react'
import ProductCard from './ProductCard';
import styles from './Product.module.css'

const ProductSection = ({ product }) => {
  return (
    <div className={styles.ProductSection}>
        {/* {product.docs.map((productInfo) => {
            const { product_title, app_sale_price, product_id, evaluate_rate, product_main_image_url } = productInfo

            return <ProductCard title={product_title} image={product_main_image_url} price={app_sale_price} id={product_id} rate={evaluate_rate} />
        })} */}
        <ProductCard title="Iphone Pro Max 12" image="https://m.media-amazon.com/images/I/41kBmL3zaZL._AC_SX679_.jpg" price={5200} id={423} rate={4.2} />
    </div>
  )
}

export default ProductSection