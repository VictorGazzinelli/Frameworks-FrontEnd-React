import React, { } from 'react';
import { Link } from 'react-router-dom';
import { Movie, usePopularMovies } from '../hooks/usePopularMovies';

export const MoviesList = () => {
  const movies = usePopularMovies();
  return (
    <>
        <ul className="movies-list">
          {movies.map((movie: Movie, index: number) => (
            <Link key={index} to={`/movie/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          ))}
        </ul>
    </>
  );
}

export default MoviesList