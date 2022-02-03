import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import Spinner from '../ui/Spinner';

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${env.API_URL}movie/popular?api_key=${env.API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setPopular(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && <span>Ok</span>}
    </div>
  );
};

export default Popular;
