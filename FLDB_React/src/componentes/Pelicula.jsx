import { useFetchPelicula } from "../funciones/useFetch";
import { Footer } from "./Footer";


export function Pelicula(){

    const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  };

  const { data } = useFetchPelicula(url, options);

    return(

        <div>

        <div className="general">
      {data && data.results ? (
        data.results.map((movie, index) => (
          <div key={index} className="pelicula">
             <img
              className="portada"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3 className="titulo-pelicula">{movie.title}</h3>
          </div>
        ))
      ) : (
        <p>No se encontraron películas populares.</p>
      )}
      </div>
      <Footer/>
      </div>

    );
}