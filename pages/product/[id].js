import React from 'react'

import { fetchApi, baseUrl } from '../../utils/fetchApi'
import { useRouter } from 'next/router'


const ProductDetails = ({ product }) => {
    console.log(product);
  
    return <p style={{ color: 'black'}}>Page id</p>
}

export default ProductDetails


export async function getServerSideProps(context) {
    const { id } = context.query;

    const product = await fetchApi(`${baseUrl}/api/product/${id}`)
  
    return {
      props: {
        product: product,
      }
    }
  }