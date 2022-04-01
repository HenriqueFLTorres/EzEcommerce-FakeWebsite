import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import Ship from '../../svg/Ship.js'
import Box from '../../svg/Box.js'
import House from '../../svg/House.js'

import DeliveryOptions from './DeliveryOptions.json'

import styles from './Shipping.module.css'

const Shipping = () => {
    const [companyOption, setCompanyOption] = useState(null)
    const [postalCode, setPostalCode] = useState('')
    const [acceptForm, setAcceptForm] = useState(false)

    let maxInputValue = 7
    const bulletPointsClass = (index) => classNames( [styles.bulletPoint], { [styles.bulletActive]: companyOption === index } )
    const optionActivated = (index) => classNames( { [styles.optionActivated]: companyOption === index } )
    const submitBuy = () => classNames( [styles.submitButtom], { [styles.submitButtomActive]: acceptForm } )


    useEffect(() => {
        if ( ( postalCode.length >= maxInputValue) && companyOption ) setAcceptForm(true)
        else setAcceptForm(false)
    }, [companyOption, postalCode])

  return (
    <section className={styles.ShippingContainer}>
        <div className={styles.ShippingRequeriments}>
            <div className={styles.DeliveryInfo}>
                <header><Ship className={styles.SVGIcon}/>Delivery Info</header>
                <p><span className={styles.GoldHighlighted}>FREE delivery</span><strong>March 30 - April 1</strong> <br/>
                For any place in the USA</p>
            </div>
            <div className={styles.DeliveryCompany}>
                <header><Box className={styles.SVGIcon}/>Delivery Company</header>

                <div className={styles.options}>
                    { DeliveryOptions.map((option, index) => (
                        <div key={index} className={styles.option}>
                            <span className={bulletPointsClass(index)} onClick={() => companyOption === index ? setCompanyOption(null) : setCompanyOption(index) }></span>
                            <p className={optionActivated(index)}>{option}</p>
                        </div>
                    )) }
                    <h6>Required for Continue</h6>
                </div> 
                
            </div>
            <div className={styles.DeliveryCode}>
                <header><House className={styles.SVGIcon}/>Delivery Destination</header>
                <div>
                    <p>Required for Continue</p>
                    <input className={styles.postalCode} placeholder="XX-XXX-XX" onChange={(input) => setPostalCode( input.target.value.slice(0, maxInputValue) )} value={postalCode} type="number" />
                </div>
            </div>
        </div>
        <a className={styles.subButtom} href="https://htportfolio.vercel.app/" target="_blank">
            <div className={submitBuy()}>
                Finish Buy
            </div>
        </a>
    </section>
  )
}

export default Shipping