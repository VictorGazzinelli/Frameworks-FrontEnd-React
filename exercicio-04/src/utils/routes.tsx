import React from "react";
import { Redirect } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import Movies from "../pages/Movies";
import Playlist from "../pages/Playlist";

export interface RouteDetails {
    isVisible: boolean
    path: string,
    name: string,
    render(props: any): JSX.Element
}

export const routes : RouteDetails[] = [
    {
        isVisible: false,
        path: '/',
        name: 'Home',
        render: (props: any) => <Redirect to={'/movie'} />
    },
    {
        isVisible: true,
        path: '/movie',
        name: 'Filmes',
        render: (props: any) => <Movies {...props} />
    },
    {
        isVisible: false,
        path: '/movie/:id',
        name: 'Filme',
        render: (props: any) => <MovieDetails {...props} />
    },
    {
        isVisible: true,
        path: '/playlist',
        name: 'Playlist',
        render: (props: any) => <Playlist {...props} />
    }
]

