//const url = "https://rickandmortyapi.com/api/episode/";
import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setData(json);
        })
        .catch(error_ => {
          setError(error_);
        });
    }
  }, [url]);
  return { data, error };
}
