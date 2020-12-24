import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface MovieDetails {
    title: string,
    overview: string,
    homepage: string
}

export const useMovieDetails = (id: number | undefined) => {
    if(!id)
        return undefined
    const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>(undefined);
    useEffect(() => {
        MoviesService.getMovieById(id)
        .then((res: any) => setMovieDetails(res.data))
    }, []);

    return movieDetails
};
