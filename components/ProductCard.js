import React from 'react'
import Image from 'next/image'

const ProductCard = ({ title, image, price, id, rate }) => {
  return (
    <div className='ProductCard'>
        {/* <Image src={image} alt={title} width={100} height={100} />
        <h3>{title}</h3>
        <h5>{price}</h5> */}




        <style jsx>
          {`
          
          h3 {
            color: blue;
          }

          `}
        </style>
    </div>
  )
}

export default ProductCard