import React from 'react';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import { useMovieDetails } from '../hooks/useMovieDetails';

function MovieDetails(props : any) {
  const id = props.match.params.id;
  const movie = useMovieDetails(id);
  return (
    <>
      <Header />
      <h1>MovieDetails</h1>
      { movie && <ListItem id={movie.id}
                        title={movie.title}
                        text={movie.overview}
                        imageUrl={movie.poster_path ?
                            `https://image.tmdb.org/t/p/original${movie.poster_path}` :
                            null } />
      }
    </>
  );
}

export default MovieDetails;
