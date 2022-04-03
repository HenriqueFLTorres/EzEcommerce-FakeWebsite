import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../../Hooks/CartHook'

import styles from './Navbar.module.css'

import Logo from '../../svg/Logo.js'
import SearchIcon from '../../svg/SearchIcon.js'
import User from '../../svg/User.js'
import CartSVG from '../../svg/Cart.js'

import classNames from 'classnames'

const Navbar = ({ cartVisibility, setCartVisibility }) => {
  const [cart, cartUpdater] = useCart()
  const [mobile, setMobile] = useState(false)
  const [width, setWidth] = useState(null);

  
  let totalCartAmount = 0
  Object.values(cart).map(item => totalCartAmount += item.amount)


  // Width Checker 

  const handleWindowSizeChange = async() => {
      setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }

  }, []);

  
  const isMobile = width <= 1200;
  console.log(isMobile);

  if ( isMobile ) {
    return (
      <div className={ classNames( styles.MobileBar , { [styles.barCollapse]: !mobile } ) }>
        <div className={styles.header}>
              <Link href="/">
                <Logo className={styles.logo} />
              </Link>
            <div className={ classNames( styles.burguer , { [styles.burguerActive]: mobile } ) } onClick={() => setMobile(!mobile)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={ classNames( styles.LinksBG , { [styles.HideBG]: !mobile } ) } onClick={() => setMobile(false)} >
            <ul className={ classNames( styles.Navlinks , { [styles.Hide]: !mobile } ) }>
              <li className={styles.link}>
                <a href="/" >Home Page</a>
              </li>
              <li className={styles.link}>
                <a href="https://github.com/HenriqueFLTorres" target="_blank" >My Github</a>
              </li>
              <li className={styles.link}>
                <a href="https://htportfolio.vercel.app/" target="_blank" >My Portfolio</a>
              </li>
              <li className={styles.link}>
                <a href="https://www.linkedin.com/in/henriquefltorres/" target="_blank" >My LinkedIn</a>
              </li>
              <div className={styles.Settings}>
                <User className={styles.UserIcon} />
                <div className={styles.Cart}>
                  <CartSVG className={styles.CartIcon} onClick={() => setCartVisibility(!cartVisibility)} />
                  <p className={styles.CartAmount} >{totalCartAmount}</p>
                </div>
              </div>
            </ul>
        </div>
        

    </div>
    )

  } else {
    return (
    <div className={styles.Navbar}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
        <ul className={styles.Links}>
          <li className={styles.link}>
            <a href="/" >Home Page</a>
          </li>
          <li className={styles.link}>
            <a href="https://github.com/HenriqueFLTorres" target="_blank" >My Github</a>
          </li>
          <li className={styles.link}>
            <a href="https://htportfolio.vercel.app/" target="_blank" >My Portfolio</a>
          </li>
          <li className={styles.link}>
            <a href="https://www.linkedin.com/in/henriquefltorres/" target="_blank" >My LinkedIn</a>
          </li>
        </ul>
        <div className={styles.Settings}>
          <User className={styles.UserIcon} />
          <div className={styles.Cart}>
            <CartSVG className={styles.CartIcon} onClick={() => setCartVisibility(!cartVisibility)} />
            <p className={styles.CartAmount} >{totalCartAmount}</p>
          </div>
        </div>
    </div>
    )
  }
}

export default Navbar