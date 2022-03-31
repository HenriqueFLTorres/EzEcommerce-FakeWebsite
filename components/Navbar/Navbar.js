import React, { useState } from 'react'
import LogoDark from '../../svg/LogoDark.svg'
import SearchIcon from '../../svg/SearchIcon.js'
import User from '../../svg/User.js'
import Cart from '../../svg/Cart.js'
import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '../../Hooks/CartHook'


const Navbar = () => {
  
  const [cart, cartUpdater] = useCart()
  
  let totalCartAmount = 0

  Object.values(cart).map(item => totalCartAmount += item.amount)

  console.log(cart);
  console.log(`Total Cart = ${totalCartAmount}`);

  return (
    <div className={styles.Navbar}>
      <Link href="/">
        <Image src={LogoDark} alt="Logo" width={150} height={200} style={{ cursor: "pointer" }}/>
      </Link>
        <div className={styles.Links}>
          <div className={styles.link}>
            <a href="/" >Home Page</a>
          </div>
          <div className={styles.link}>
            <a href="https://github.com/HenriqueFLTorres" target="_blank" >My Github</a>
          </div>
          <div className={styles.link}>
            <a href="https://htportfolio.vercel.app/" target="_blank" >My Portfolio</a>
          </div>
          <div className={styles.link}>
            <a href="https://www.linkedin.com/in/henriquefltorres/" target="_blank" >My LinkedIn</a>
          </div>
        </div>
        <div className={styles.Settings}>
          <User className={styles.UserIcon} />
          <div className={styles.Cart}>
            <Cart className={styles.CartIcon} />
            <p className={styles.CartAmount}>{totalCartAmount}</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar