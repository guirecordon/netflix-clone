import styles from './Header.module.css'

export function Header({headerToggle}) {
  return (
    <header className={`${styles.header} ${headerToggle && styles.superimpose}`}>
      <div className={styles.logo}>
        <a href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </a>
      </div>      
      <div className={styles.userAvatar} >
        <a href="">
          <img className={styles.userAvatarImg} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
        </a>
      </div>
    </header>
  )
}