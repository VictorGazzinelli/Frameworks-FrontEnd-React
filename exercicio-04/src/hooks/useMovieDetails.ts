import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface MovieDetails {
    title: string,
    overview: string,
    homepage: string,
    id: number,
    poster_path: string | null;
}

export const useMovieDetails = (id: number | undefined) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails | undefined>(undefined);
    useEffect(() => {
        if(!id)
            return;
        MoviesService.getMovieById(id)
        .then((res: any) => setMovieDetails(res.data))
    }, []);

    return movieDetails
};
