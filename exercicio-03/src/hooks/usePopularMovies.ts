import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface Movie {
    id: number,
    overview : string,
    genre_ids: number[],
    title: string,
}

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => setMovies(res.data.results))
  }, []);
  return movies;
}

