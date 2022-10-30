import React from 'react'
import styles from './Header.module.css'

function Header({count}) {
  return (
    <div className={styles.head}>
        <span>{count}</span>
        <span>Birthdays</span>
    </div>
  )
}

export default Header
