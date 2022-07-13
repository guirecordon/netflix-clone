const API_KEY = 'e7c7f6fd32610da97026dc8ff7452fc7';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  const json = response.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await basicFetch(`/discover/tv?with_network=213&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recommended for you',
        items: await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Action',
        items: await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
      },
    ]
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}

    if(movieId) {
      switch(type) {
        case 'movie':
          info = basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
        break;
        case 'tv':
          info = basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
        break;
      }
    }

    return info;
  }
}