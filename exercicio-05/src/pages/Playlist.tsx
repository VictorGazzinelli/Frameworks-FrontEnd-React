import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header'
import MoviesList from '../components/MoviesList';

function Playlist() {
  const moviesStore = useSelector(s => s);
  //@ts-ignore
  const { playlist } = moviesStore;
  return (
    <>
      <Header />
      <h1>Playlist</h1>
      <MoviesList movies={playlist} />
    </>
  );
}

export default Playlist;
