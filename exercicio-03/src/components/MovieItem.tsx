import React from 'react';
import { MovieDetails, useMovieDetails } from '../hooks/useMovieDetails';

export const MovieItem = (props : any) => {
    const id = props?.match?.params?.id;
    console.log('id',id)
    const movieDetails : MovieDetails | undefined = useMovieDetails(id);
    console.log('movieDetails',movieDetails)
    return (
        <>
            {
                movieDetails &&
                <div>
                    <h3>{movieDetails.title}</h3>
                    <p>{movieDetails.overview}</p>
                    <a href={movieDetails.homepage}>Homepage</a>
                </div>   
            }
        </>
    );
}

export default MovieItem;