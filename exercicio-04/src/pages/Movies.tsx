import React from 'react';
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import { usePopularMovies } from '../hooks/usePopularMovies';

function Movies() {
  const movies = usePopularMovies();
  return (
    <>
      <Header />
      <h1>Movies</h1>
      <MoviesList movies={movies} />
    </>
  );
}

export default Movies;
