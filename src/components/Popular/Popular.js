import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import PopularList from './PopularList';
import { API_URL, API_KEY } from '../../utils/properties';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem('currentPage') || 1
  );
  const [genreList, setGenreList] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${currentPage}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        setPopularMovies(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

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

  const currentPageChangedHandler = (newPage) => {
    setCurrentPage(newPage);
    localStorage.setItem('currentPage', newPage);
  };

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && !!error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && !!popularMovies && !!genreList && (
        <PopularList
          data={popularMovies}
          genres={genreList}
          onCurrentPageChanged={currentPageChangedHandler}
        />
      )}
    </div>
  );
};

export default Popular;
