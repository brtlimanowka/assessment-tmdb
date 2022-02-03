import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MoviesState from './store/movies/MoviesState';
import Popular from './components/Popular/Popular';
import './App.css';

function App() {
  return (
    <MoviesState>
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Popular} />
            {/* <Route path='/movie/:id' component={Details} /> */}
            {/* <Route exact path='/movie' render={() => <Redirect to='/' />} /> */}
            <Route path='*' render={() => <Redirect to='/' />} />
          </Switch>
        </BrowserRouter>
      </div>
    </MoviesState>
  );
}

export default App;
