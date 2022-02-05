import React, { useState, useEffect } from 'react';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import ListList from './ListList';
import { API_URL, API_KEY, SESSION_ID } from '../../utils/properties';

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lists, setLists] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${API_URL}/account/11868136/lists?api_key=${API_KEY}&session_id=${SESSION_ID}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        setLists(data.results);
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
      {!isLoading && !error && !!lists && <ListList data={lists} />}
    </div>
  );
};

export default List;
