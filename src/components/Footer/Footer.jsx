import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footer__logo}>Лого</div>
      <div className={styles.footer__text}>Все права защищены</div>
    </div>
  )
}