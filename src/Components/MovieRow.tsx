import {CaretLeft, CaretRight} from 'phosphor-react'
import { useState } from 'react'
import styles from './MovieRow.module.css'

export function MovieRow({title, items}) {

  const [scrollX, setScrollX] = useState(0)

  function handleRotateLeft() {
    let roll = scrollX + Math.round(window.innerWidth / 2)
    if(roll > 0) {
      roll = 0
    }
    setScrollX(roll);
  }

  function handleRotateRight() {
    let roll = scrollX - Math.round(window.innerWidth / 2)
    let rollSize = items.results.length * 150    

    if(Math.abs(roll) + window.innerWidth < rollSize ) {
      if((window.innerWidth - rollSize) > roll) {
        roll = (window.innerWidth - rollSize) - 64
      }
      setScrollX(roll)
    }
  }

  return (
    <div className={styles.movieRow}>
      <h2>{title}</h2>
      <div 
        className={styles.arrowLeft}
        onClick={handleRotateLeft}
        >
        <CaretLeft size={32} weight="bold" />
      </div>
      <div 
        className={styles.arrowRight}
        onClick={handleRotateRight}
        >
        <CaretRight size={32} weight="bold" />
      </div>
      <div className={styles.listarea}>
        <div style={
              {
                width: `${items.results.length * 150}px`,
                marginLeft: scrollX,
                transition: '0.5s'
              }
            }>
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