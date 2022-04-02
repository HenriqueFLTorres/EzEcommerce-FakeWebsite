import React, { useState } from 'react'
import { useCart } from '../../Hooks/CartHook'
import Shipping from '../ProductInfo/Shipping.js'

import styles from './Navbar.module.css'
import classNames from 'classnames'

import Close from '../../svg/Close'
import Trash from '../../svg/Trash'
import style from './Navbar.module.css'

const Cart = ({ cartVisibility, setCartVisibility }) => {
    const [cart, setCart] = useCart()
    const [render, setRender] = useState(0) // a useState to force the component to render after removing a specific item from cart
    const [cartPage, setCartPage] = useState(0)

    let totalPrice = 0
    // Calc of total price
    Object.values(cart).map((item) => totalPrice += item.amount * item.price)


    const cartInterfaceClass = () => classNames( [styles.CartInterface], { [styles.Closed]: !cartVisibility }, { [styles.payment]: cartPage === 1 } )

  return (
    <div className={cartInterfaceClass()} onClick={() => {setCartVisibility(false)}}>
        <div className={styles.CartGUI} onClick={(e) => e.stopPropagation()}>

          <div className={styles.head}>
            <button className={styles.removeAll} onClick={() => setCart([])} >Remove All</button>
            <Close className={styles.CloseIcon} onClick={() => setCartVisibility(false)}/>
          </div>

            <div className={styles.ProductDisplay}>
              {Object.values(cart).map((item, index) => (

                <div className={styles.CartItem} key={index}>
                  <div className={styles.ImageContainer}>
                    <img src={item.image} alt={item.title}/>
                  </div>
                  <div className={styles.CartItemInfo}>
                    <div className={styles.CartItemHead}>
                      <h1>{item.title.substring(0, 80)}...</h1>
                      <button onClick={() => { 
                        delete cart[item.id]
                        setCart( cart )
                        setRender(render + 1)
                       }}
                       ><Trash className={styles.trashIcon}/></button>
                    </div>
                    <h4>$ {item.price}</h4>
                    <h6>x{item.amount}</h6>
                  </div>
                </div>

              ))}
            </div>

            { cartPage === 1 &&
            <div className={styles.checkOut}>
              <h1>Check Out</h1>

              <h5>Please Select your deliver options</h5>
            </div>
            }
            { cartPage === 1 && <Shipping /> }

            <footer className={styles.CartFooter}>
              <p className={styles.TotalPrice}>
                <strong>Total Price: </strong> $ {totalPrice}
              </p> {/* .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") */}
                        {/* a regex to put a space every 3 numbers */}
              { cartPage === 0 && <button className={styles.NextButton} onClick={() => setCartPage(1)}> next </button> }
              { cartPage === 1 && <button className={styles.PrevButton} onClick={() => setCartPage(0)}> prev </button>}
            </footer>
        </div>
    </div>
  )
}

export default Cart