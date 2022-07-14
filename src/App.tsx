import { useEffect, useState } from 'react'
import { MovieRow } from './Components/MovieRow';
import tmdb from './tmdb'

import './global.css';
import { FeaturedMovie } from './Components/FeaturedMovie';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

interface Results {
  backdrop_path: string;
  first_air_date: Date;
}

interface Items {
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

interface List {
  items: Items;
  slug: string;
  title: string;
}

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)
  const [headerBckgr, setHeaderBckgr] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList()
      setMovieList(list);     

      let originalsList = list.filter(item => item.slug === 'originals');
      let randomSelection = Math.floor(Math.random() * originalsList[0].items.results.length - 1)
      let randomTitle = originalsList[0].items.results[randomSelection];
      let randomTitleInfo = await tmdb.getMovieInfo(randomTitle.id, 'tv');
      if(randomTitleInfo.backdrop_path !== null) setfeaturedData(randomTitleInfo);
    }
    loadAll()
  }, [])

  useEffect(() => {
    function handleScroll() {
      if(window.scrollY > 35) {
        setHeaderBckgr(true);
      } else {
        setHeaderBckgr(false);
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='page'>

      <Header 
        headerToggle={headerBckgr} 
      />

      {featuredData && (
        <FeaturedMovie 
          item={featuredData} 
        />
      )}

      <section className='lists'>
        {movieList.map((row) => (
          <div>
            <MovieRow
              key={row.slug} 
              title={row.title} 
              items={row.items}
            />
          </div>
        ))}
      </section>

      <Footer />

      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.gifer.com/8Etj.gif" 
            alt="loading" />
        </div>
      }

    </div>
  )
}
