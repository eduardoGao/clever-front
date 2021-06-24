import React from 'react'
import styles from '../styles/Cta.module.css'
import { Button } from '../components'

function Cta({ data }) {
  return (
    <section className={styles.background}>
      <div className={styles.layout}>
        <div className={styles.text}>
          <h2 className={styles.title}>{data.title}</h2>
          <button className={styles.button}>{data.button}</button>
        </div>
        <div className={styles.imageContainer}>
          <img src={data.image.image.url} alt="" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

export default Cta
