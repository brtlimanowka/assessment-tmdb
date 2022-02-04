import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import PopularList from './PopularList';
import { API_URL, API_KEY } from '../../utils/properties';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [genreList, setGenreList] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/genre/movie/list?api_key=${API_KEY}&language=pl`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        setGenreList(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && !!error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && !!popularMovies && !!genreList && (
        <PopularList data={popularMovies} genres={genreList} />
      )}
    </div>
  );
};

export default Popular;
