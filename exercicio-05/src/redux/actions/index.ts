import { MovieDetails } from '../../hooks/useMovieDetails';

export interface ReduxAction {
    type: string,
    movie: MovieDetails
}

export const insertPlaylist = (movie : MovieDetails) : ReduxAction => ({
    type: 'insertPlaylist',
    movie,
});