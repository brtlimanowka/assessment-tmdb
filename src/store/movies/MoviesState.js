import React, { useReducer } from 'react';
import moviesContext from './moviesContext';
import moviesReducer from './moviesReducer';
import {} from '../types';
import env from 'react-dotenv';

const MoviesState = (props) => {
  const initialState = {
    isLoading: false,
    error: null,
    popularMovies: null,
  };
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  const contextValues = {
    isLoading: state.isLoading,
    error: state.error,
    popularMovies: state.popularMovies,
  };

  return (
    <moviesContext.Provider value={contextValues}>
      {props.children}
    </moviesContext.Provider>
  );
};

export default MoviesState;
