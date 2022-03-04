const API_KEY = process.env.REACT_APP_API_KEY
const API_BASE = process.env.REACT_APP_API_BASE

const basicFetch = async (endpoint: any) => {
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json
}

export type MovieSection = {
  slug: string
  title: string
  items: {
    page: number
    results: [
      {
        adult: boolean
        backdrop_path: string
        genre_ids: number[]
        id: number
        original_language: string
        original_title: string
        overview: string
        popularity: number
        poster_path: string
        release_date: string
        title: string
        video: boolean
        vote_average: number
        vote_count: number
      }
    ]
  }
}

export async function getHomeList(): Promise<MovieSection[]> {
  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch(
        `/discover/tv?with_network=123&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'trending',
      title: 'Recomendados para você',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'toprated',
      title: 'Em alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'comedy',
      title: 'Comedia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'horror',
      title: 'Terro',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
      ),
    },
    {
      slug: 'documentary',
      title: 'Documentário',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
      ),
    },
  ]
}

export async function getMovieList(movieId: number, type: string) {
  let info = null

  if (movieId) {
    switch (type) {
      case 'movie':
        info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        )
        break
      case 'tv':
        info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
        )
        break
    }
  }

  return info
}

// export default TMDB
