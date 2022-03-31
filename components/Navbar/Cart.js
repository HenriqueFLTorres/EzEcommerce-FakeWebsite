import React from 'react'
import { useCart } from '../../Hooks/CartHook'
import Shipping from '../ProductInfo/Shipping.js'

import styles from './Navbar.module.css'
import classNames from 'classnames'

import Close from '../../svg/Close'

const Cart = ({ cartVisibility, setCartVisibility }) => {
    const [cart, setCart] = useCart()

    let totalPrice = 0
    // Calc of total price
    Object.values(cart).map((item) => totalPrice += item.amount * item.price)


    const cartInterfaceClass = () => classNames( [styles.CartInterface], { [styles.Closed]: !cartVisibility } )

  return (
    <div className={cartInterfaceClass()} onClick={() => {setCartVisibility(false)}}>
        <div className={styles.CartGUI} onClick={(e) => e.stopPropagation()}>
            <Close className={styles.CloseIcon} onClick={() => setCartVisibility(false)}/>
            <div className={styles.ProductDisplay}>
              {Object.values(cart).map((item, index) => (
                <div className={styles.CartItem} key={index}>
                  <div className={styles.ImageContainer}>
                    <img src={item.image} alt={item.title}/>
                  </div>
                  <div className={styles.CartItemInfo}>
                    <h1>{item.title.substring(0, 90)}...</h1>
                    <h4>$ {item.price}</h4>
                    <h6>x{item.amount}</h6>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.TotalPrice}><strong>Total Price:</strong> $ {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</p>
            <Shipping className={styles.shipping}/>
        </div>
    </div>
  )
}

export default Cart