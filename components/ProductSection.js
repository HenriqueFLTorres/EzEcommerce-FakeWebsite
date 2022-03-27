import React from 'react'
import ProductCard from './ProductCard';

const ProductSection = ({ product }) => {
  return (
    <div>
        {/* {product.docs.map((productInfo) => {
            const { product_title, app_sale_price, product_id, evaluate_rate, product_main_image_url } = productInfo

            return <ProductCard title={product_title} image={product_main_image_url} price={app_sale_price} id={product_id} rate={evaluate_rate} />
        })} */}
    </div>
  )
}

export default ProductSection