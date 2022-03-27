import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import Ship from '../../svg/Ship.js'
import Box from '../../svg/Box.js'
import House from '../../svg/House.js'

import DeliveryOptions from './DeliveryOptions.json'

import styles from './Shipping.module.css'

const Shipping = () => {
    const [option, setOption] = useState(null)
    const [postalCode, setPostalCode] = useState('')
    const [acceptForm, setAcceptForm] = useState(false)

    let maxInputValue = 7
    const bulletPointsClass = (index) => classNames( [styles.bulletPoint], { [styles.bulletActive]: option === index } )
    const optionActivated = (index) => classNames( { [styles.optionActivated]: option === index } )
    const submitBuy = () => classNames( [styles.submitButtom], { [styles.submitButtomActive]: acceptForm } )

    console.log(acceptForm);
    const checkMax = input => {
        if ( ( input.length >= maxInputValue) && option ) setAcceptForm(true)
        else setAcceptForm(false)
        return input.slice(0, maxInputValue)
    }

    useEffect(() => {
        
    })

  return (
    <section className={styles.ShippingContainer}>
        <div className={styles.ShippingRequeriments}>
            <div className={styles.DeliveryInfo}>
                <header><Ship className={styles.SVGIcon}/>Delivery Info</header>
                <p><div className={styles.GoldHighlighted}>FREE delivery</div><strong>March 30 - April 1</strong> <br/>
                For any place in the USA</p>
            </div>
            <div className={styles.DeliveryCompany}>
                <header><Box className={styles.SVGIcon}/>Delivery Company</header>

                <div className={styles.options}>
                    { DeliveryOptions.map((option, index) => (
                        <div key={index} className={styles.option}>
                            <span className={bulletPointsClass(index)} onClick={() => setOption(index)} />
                            <p className={optionActivated(index)}>{option}</p>
                        </div>
                    )) }
                </div> 
                
            </div>
            <div className={styles.DeliveryCode}>
                <header><House className={styles.SVGIcon}/>Delivery Destination</header>
                <div>
                    <input className={styles.postalCode} placeholder="XX-XXX-XX" onChange={(input) => setPostalCode( checkMax(input.target.value) )} value={postalCode} type="number" />
                </div>
            </div>
        </div>
        <div className={submitBuy()}>
            Finish Buy
        </div>
    </section>
  )
}

export default Shipping