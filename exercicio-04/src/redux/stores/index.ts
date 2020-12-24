import { createStore } from "redux";
import playlistReducer from "../reducers";

export default createStore(
    playlistReducer,
);