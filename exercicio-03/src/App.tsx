import React from 'react';
import { Movie, usePopularMovies } from './hooks/usePopularMovies';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MovieList  from './components/MovieList'
import MovieItem  from './components/MovieItem'

function App() {
  const movies = usePopularMovies()
  return (
    <Router>
      <Switch>
      <Route
            exact
            path="/"
            render={() => {
                return (
                  <Redirect to="/movie" />
                )
            }}
          />
          <Route exact path="/movie">
            <MovieList />
          </Route>
          <Route 
            path="/movie/:id"
            render={(props:any) => <MovieItem {...props} />}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;