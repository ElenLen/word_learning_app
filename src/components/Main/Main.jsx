import styles from './Main.module.css'
import DataFetcher from './DataFetcher.jsx';


export default function Main() {
  return (
    <div className={styles.main}>
      <h1 className={styles.main__title}>Карточки</h1>
      <div className={styles.main__items}>
        <DataFetcher />

      </div>
    </div>

  )
}