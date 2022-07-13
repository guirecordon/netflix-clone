import styles from './FeaturedMovie.module.css'

export function FeaturedMovie({item}) {
  
  let firstDate = new Date(item.first_air_date);

  const genres = item.genres.map(genre => (
    genre.name
  ))
  
  return (
    <section className={styles.featured} style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>

      <div className={styles.featuredGradient}>
        <div className={styles.featuredHorizontalGrad}>
          <div className={styles.featuredTitle}>{item.name}</div>
          <div className={styles.info}>
            <div className={styles.rating}>{item.vote_average} points</div>
            <div className={styles.year}>{firstDate.getFullYear()}</div>
            <div className={styles.seasons}>{item.number_of_seasons} season{item.number_of_seasons > 1 ? 's' : ''}</div>
          </div>
          <div className={styles.description}>{item.overview}</div>
          <div className={styles.buttons}>
            <a className={styles.watchBtn} href="">Watch</a>
            <a className={styles.mylistBtn} href="">+ My List</a>
          </div>
          <div className={styles.genres}>
            <strong>Genre: {genres.join(", ")}</strong>
          </div>
        </div>
      </div>
      
    </section>
  )
}