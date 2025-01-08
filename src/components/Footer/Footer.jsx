import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footer__logo}>
        <img src="../src/assets/images/speak.png" alt="speak" />
        How to say...?
      </div>
      <span className={styles.footer__text}>Created by ElenLen ⓒ 2025</span>
    </div>
  )
}