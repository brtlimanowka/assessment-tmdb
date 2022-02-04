import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import { API_URL, API_KEY } from '../../utils/properties';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`)
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
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && !!error && <ErrorMessage errorMessage={error} />}
    </div>
  );
};

export default Popular;
