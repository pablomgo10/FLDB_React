//import { useEffect, useState } from "react";
import { useFetch } from "../funciones/useFetch";
import { useNavigate } from "react-router-dom";


export function Listado({ pagina }) {
  const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${pagina}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  const { data } = useFetch(url, options);

  const navigate = useNavigate();

  const cambiarPelicula = (nuevaPelicula) => {
    navigate(`/pelicula?id=${nuevaPelicula}`);
  };
  return (
    <div className="general" key={pagina}>
      {data && data.results ? (
        data.results.map((movie) => (
          <div className="pelicula" key={movie.id}>
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
