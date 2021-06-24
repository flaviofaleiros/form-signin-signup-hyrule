import React from 'react'
import styles from './styles.css'

function TextError (props) {
  return <div className={styles.Form__Error} >{props.children}</div>
}

export default TextError
