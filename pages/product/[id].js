import React from 'react'

import { fetchApi, baseUrl } from '../../utils/fetchApi'


const ProductDetails = ({ currency }) => {
    console.log(currency);
  return (
    <div>[id]</div>
  )
}

export default ProductDetails


export async function getServerSideProps({ params: { productId } }) {
    const data = await fetchApi(`${baseUrl}/api/product/${productId}`)
 
 
    console.log(data);
    return {
        props: { currency: data}
    }
 }