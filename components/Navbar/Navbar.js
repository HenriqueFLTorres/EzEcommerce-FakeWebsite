import React, { useState } from 'react'
import LogoDark from '../../svg/LogoDark.svg'
import SearchIcon from '../../svg/SearchIcon.js'
import User from '../../svg/User.js'
import Cart from '../../svg/Cart.js'
import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'

const Navbar = ({ setSearch }) => {
  const [position, setPosition] = useState()

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
          <Cart className={styles.CartIcon} />
        </div>
    </div>
  )
}

export default Navbar