import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__menu} >
        <div className={styles.header__menuBurger}>
          <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="38" height="2" rx="1" fill="#4F4E4F" />
            <rect y="10" width="38" height="2" rx="1" fill="#4F4E4F" />
            <rect y="20" width="26" height="2" rx="1" fill="#4F4E4F" />
          </svg>
        </div>
        <div className={styles.header__menuTeam}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
            <path d="M23.836,8.794a3.179,3.179,0,0,0-3.067-2.226H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832L4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6A3.177,3.177,0,0,0,23.836,8.794Zm-2.343,1.991-4.144,3.029a1,1,0,0,0-.362,1.116L18.562,19.8a1.227,1.227,0,0,1-1.895,1.365l-4.075-3a1,1,0,0,0-1.184,0l-4.075,3a1.227,1.227,0,0,1-1.9-1.365L7.013,14.93a1,1,0,0,0-.362-1.116L2.507,10.785a1.227,1.227,0,0,1,.724-2.217h5.1a1,1,0,0,0,.952-.694l1.55-4.831a1.227,1.227,0,0,1,2.336,0l1.55,4.831a1,1,0,0,0,.952.694h5.1a1.227,1.227,0,0,1,.724,2.217Z" />
          </svg>
          <a href="#">My Team</a>
        </div>
        <div className={styles.header__menuTasks}>
          <a href="#">Tasks
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2_86)">
                <path d="M11.8534 2.89662C11.6579 2.70113 11.3419 2.70113 11.1464 2.89662L5.99998 8.04301L0.853593 2.89662C0.658105 2.70113 0.342104 2.70113 0.146616 2.89662C-0.048872 3.0921 -0.048872 3.40811 0.146616 3.60359L5.64651 9.10348C5.744 9.20098 5.87199 9.24999 6.00001 9.24999C6.12802 9.24999 6.25601 9.20098 6.35351 9.10348L11.8534 3.60359C12.0489 3.40811 12.0489 3.0921 11.8534 2.89662Z"
                  fill="#858796" />
              </g>
              <defs>
                <clipPath id="clip0_2_86">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* <!--  выпадающий список задач--> */}
          <div className={styles.header__menuTasksItems}>
            <div className={styles.header__menuTasksItem}>Tasks Today</div>
            <div className={styles.header__menuTasksItem}>Tasks Yesterday</div>
          </div>
        </div>
      </div >

      <div className={styles.header__search}>
        <div className={styles.header__searchBlock}>
          <div className={styles.header__searchInput}>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20">
              <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
            </svg>

            {/* поиск */}
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <a href="#" className={styles.header__searchStat}>
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
            <path d="M23,22H5a3,3,0,0,1-3-3V1A1,1,0,0,0,0,1V19a5.006,5.006,0,0,0,5,5H23a1,1,0,0,0,0-2Z" />
            <path d="M6,20a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v7A1,1,0,0,0,6,20Z" />
            <path d="M10,10v9a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z" />
            <path d="M15,13v6a1,1,0,0,0,2,0V13a1,1,0,0,0-2,0Z" />
            <path d="M20,9V19a1,1,0,0,0,2,0V9a1,1,0,0,0-2,0Z" />
            <path d="M6,9a1,1,0,0,0,.707-.293l3.586-3.586a1.025,1.025,0,0,1,1.414,0l2.172,2.172a3,3,0,0,0,4.242,0l5.586-5.586A1,1,0,0,0,22.293.293L16.707,5.878a1,1,0,0,1-1.414,0L13.121,3.707a3,3,0,0,0-4.242,0L5.293,7.293A1,1,0,0,0,6,9Z" />
          </svg>
        </a>
        <button className={styles.header__searchButton}>Upload</button>
      </div>
    </div >
  )
}