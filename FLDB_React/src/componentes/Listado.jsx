import { useFetch } from "../funciones/useFetch";
import { Link } from "react-router-dom";

export function Listado({pagina}){

    const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${pagina}`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  };

  const { data } = useFetch(url, options);

    return(

        <div className="general">
      {data && data.results ? (
        data.results.map((movie, index) => (
          <div key={index} className="pelicula">
              <Link to="/pelicula">
             <img
              className="portada"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            </Link>
            <h3 className="titulo-pelicula">{movie.title}</h3>
          </div>
        ))
      ) : (
        <p>No se encontraron películas populares.</p>
      )}
      </div>
      


    );
}