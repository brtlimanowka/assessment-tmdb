import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import MovieItem from './MovieItem';
import { API_URL, API_KEY } from '../../utils/properties';

const Movie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        setDetails(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && !!error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && !!details && <MovieItem data={details} />}
    </div>
  );
};

export default Movie;
