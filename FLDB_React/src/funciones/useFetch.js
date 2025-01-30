import { useState, useEffect } from 'react';

export function useFetch(url, options) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
    };

    fetchData();
    
  }, [url, options]);

  return { data };
};

export function useFetchPelicula(url, options) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
    };

    fetchData();
    
  }, [url, options]);

  return { data };
};
