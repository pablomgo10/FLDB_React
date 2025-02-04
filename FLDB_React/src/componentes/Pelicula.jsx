import { useFetchPelicula } from "../funciones/useFetch";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { format } from "date-fns";
import { es } from 'date-fns/locale';


export function Pelicula() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idPelicula = params.get("id");




  const url = useMemo(() => `https://api.themoviedb.org/3/movie/${idPelicula}?language=es-ES`, [idPelicula]);

  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  }), []);

  const { data } = useFetchPelicula(url, options);

  const number = ((valor) => {
    return Math.round(valor * 10) / 10;
  })

  return (

    <div className="wrapper">
      <Nav />
      {data ? (
        <div key={data.id} className="pelicula-general">

          <img className="portada-pelicula" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.tittle} />
          <div className="info-esencial">
            <h2>
              Información general
            </h2>
            <p>
              Titulo: {data.title}
            </p>
            <p>
              Genero: {data.genres.map((genero, index) => (
                genero.name + (index < data.genres.length - 1 ? ',' : '.')
              ))}
            </p>
            <p>
              Fecha de lanzamiento: {
                format(new Date(data.release_date), "dd/MM/yyyy", { locale: es })
              }
            </p>
            <p>
              Valoración media: {
                data.vote_average < 5.0 ? (
                  <span className="suspenso">{number(data.vote_average)}</span>
                ) : data.vote_average < 7.0 ? (
                  <span className="regular">{number(data.vote_average)}</span>
                ) : (
                  <span className="aprobado">{number(data.vote_average)}</span>
                )
              }
            </p>

          </div>
          <div className="desc">
            <h2>Descripción</h2>
            <p>
              {data.overview}
            </p>
          </div>
        </div>
      ) : (
        <p>No hay peliculas</p>
      )
      }
      <Footer />
    </div>

  );
}