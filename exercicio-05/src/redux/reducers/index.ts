import { Movie } from "../../hooks/usePopularMovies";
import { ReduxAction } from '../actions'

export interface ReduxReducerState {
    playlist: Movie[]
}

const initialState : ReduxReducerState = {
    playlist: []
}

const playlistReducer = (state : ReduxReducerState = initialState , action: ReduxAction) => {
  switch (action.type) {
    case 'insertPlaylist':
      return {
        // @ts-ignore
        playlist : [...new Set([...state.playlist, action.movie])]
      };
    default: return state;
  }
};

export default playlistReducer;