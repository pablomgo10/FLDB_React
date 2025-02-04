//import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useFetch } from "../funciones/useFetch";
import { useNavigate } from "react-router-dom";


export function Listado({ url }) {

  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  }), []);

  const { data } = useFetch(url, options);

  const navigate = useNavigate();

  const cambiarPelicula = (nuevaPelicula) => {
    navigate(`/pelicula?id=${nuevaPelicula}`);
  };

  const number = ((valor) => {
    return (Math.round(valor * 10) / 10).toFixed(1);
  })

  return (
    <div className="general" key={url}>
      {data && data.results ? (
        data.results.map((movie) => (
          <div className="pelicula" key={movie.id}>
            <div className="valoracion-pelicula">
            {
                movie.vote_average < 5.0 ? (
                  <span className="suspenso-portada">{number(movie.vote_average)}</span>
                ) : movie.vote_average < 7.0 ? (
                  <span className="regular-portada">{number(movie.vote_average)}</span>
                ) : (
                  <span className="aprobado-portada">{number(movie.vote_average)}</span>
                )
              }
              </div>
            <img
            onClick={() => cambiarPelicula(movie.id)}
              className="portada"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="titulo-pelicula"
            onClick={() => cambiarPelicula(movie.id)}
            >{movie.title}</h3>
          </div>
        ))
      ) : (
        <p>No se encontraron películas populares.</p>
      )}
    </div>
  );
}
