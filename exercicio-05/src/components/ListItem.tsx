import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { insertPlaylist } from '../redux/actions'

export interface IListItem {
  id?: number,
  imageUrl: string | null,
  title: string,
  text: string
}

function ListItem({id, imageUrl, title, text}: IListItem) {
  const dispatch = useDispatch();
  const movieDetails = useMovieDetails(id);
  return (
    <>
    <Card>
      { 
        id && <Link to={`/movie/${id}`}>
          <h3>{title}</h3>
        </Link>
      }
      {
        !id && <h3>{title}</h3>
      }
      {
        imageUrl && <img src={imageUrl} style={{width: '200px', height: '200px'}} alt={"Imagem"} />
      }
      <p>{text}</p>
      <button onClick={() => {
        if(!movieDetails)
          return;
        dispatch(insertPlaylist(movieDetails))
        }}>Favorite</button>
    </Card>
    <hr />
    </>
  );
}

export default ListItem;

const Card = styled.div`

`
