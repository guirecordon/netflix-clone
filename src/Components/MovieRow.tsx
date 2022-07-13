import styles from './MovieRow.module.css'

export function MovieRow({title, items}) {
  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div className={styles.listarea}>
        <div className='movieRow--list'>
          {items.results.length > 0 && items.results.map(item => (
            <div className={styles.item}>
              <img key={item.slug} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}