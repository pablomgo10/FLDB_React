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

export function useFetchPlataformas(url, options) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        setDatos(result);
    };

    fetchDatos();
    
  }, [url, options]);

  return { datos };
};

export function useFetchVideos(url, options) {
  const [datosVideos, setDatosVideos] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
        const response = await fetch(url, options);
        const result = await response.json();
        setDatosVideos(result);
    };

    fetchDatos();
    
  }, [url, options]);

  return { datosVideos };
};

