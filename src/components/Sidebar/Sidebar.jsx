import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <a href="#" className={styles.logo}>
        How to say...?
      </a>
      <nav className={styles.navigation}>
        <ul>
          <li className={styles.navigation__item}>
            <a href="#" >
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
                <path d="M21.155,3.272,18.871.913A3.02,3.02,0,0,0,16.715,0H12A5.009,5.009,0,0,0,7.1,4H7A5.006,5.006,0,0,0,2,9V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5v-.1A5.009,5.009,0,0,0,22,14V5.36A2.988,2.988,0,0,0,21.155,3.272ZM13,22H7a3,3,0,0,1-3-3V9A3,3,0,0,1,7,6v8a5.006,5.006,0,0,0,5,5h4A3,3,0,0,1,13,22Zm4-5H12a3,3,0,0,1-3-3V5a3,3,0,0,1,3-3h4V4a2,2,0,0,0,2,2h2v8A3,3,0,0,1,17,17Z" />
              </svg>
              <span>Тренировка по карточкам</span>
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                <path d="M20,0H5c-1.654,0-3,1.346-3,3V21c0,1.654,1.346,3,3,3H22V2c0-1.103-.897-2-2-2Zm0,18H8V2h4V11l2.5-2.5,2.5,2.5V2h3V18ZM5,2h1V18h-1c-.351,0-.687,.061-1,.172V3c0-.551,.449-1,1-1Zm0,20c-.551,0-1-.449-1-1s.449-1,1-1h15v2H5Z" />
              </svg>
              <span>Словарь</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}