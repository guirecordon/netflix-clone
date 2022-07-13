import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>React JS and TypeScript project built by Gui Recordon - Web Dev</p>
      <p>Built using the <a href="https://themoviedb.org" target="_blank"> The Movie Database</a> API</p>
      <p>All image rights reserved to Netflix</p>
    </footer>
  )
}