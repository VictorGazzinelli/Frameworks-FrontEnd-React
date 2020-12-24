import React, { } from 'react';
import { Movie, usePopularMovies } from '../hooks/usePopularMovies';
import ListItem from './ListItem';

export interface MoviesList {
    movies: Movie[]
}

export const MoviesList = ({movies}: MoviesList) => {
  return (
    <>
        <ul className="movies-list">
            {movies.map((movie: Movie, index: number) => (
                <li key = {index}>
                    <ListItem id={movie.id}
                        title={movie.title}
                        text={movie.overview}
                        imageUrl={movie.poster_path ?
                            `https://image.tmdb.org/t/p/original${movie.poster_path}` :
                            null } />
                </li>
            ))}
        </ul>
    </>
  );
}

export default MoviesList
