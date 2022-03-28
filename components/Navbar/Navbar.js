import React from 'react'
import LogoDark from '../../svg/LogoDark.svg'
import SearchIcon from '../../svg/SearchIcon.js'
import User from '../../svg/User.js'
import Cart from '../../svg/Cart.js'
import styles from './Navbar.module.css'

import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link href="/">
        <Image src={LogoDark} alt="Logo" width={150} height={200} style={{ cursor: "pointer" }}/>
      </Link>
        <div className={styles.SearchBar}>
          <div className={styles.Category}>All Categories</div>
          <input className={styles.SearchInput} type={styles.search} />
          <div className={styles.Search}>
            <SearchIcon className={styles.SearchIcon}/>
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