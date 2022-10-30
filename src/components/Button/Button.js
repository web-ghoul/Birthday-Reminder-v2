import React from 'react'
import styles from './Button.module.css'

function Button({text,formHandle,Class}) {
  return (
    <div className={styles.btn}>
        <button className={Class ? styles.add : ''} onClick={formHandle}>{text}</button>
    </div>
  )
}

export default Button