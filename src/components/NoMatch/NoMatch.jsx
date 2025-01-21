import styles from './NoMatch.module.css'

export default function NoMatch() {
  return (
    <div >
      <h1 className={styles.h1}>
        Whoops!
        {/* <img src="../src/assets/images/speak.png" alt="speak" /> */}
      </h1>
      <p>404 PAGE NOT FOUND</p>
    </div>
  )
}