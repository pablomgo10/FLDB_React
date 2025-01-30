import { useFetchPelicula } from "../funciones/useFetch";
import { Footer } from "./Footer";
import { useLocation } from "react-router-dom";


export function Pelicula(){
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const idPelicula = params.get("id");

    const url = `https://api.themoviedb.org/3/movie/${idPelicula}?language=es-ES`;
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
      {data ? (
        <div key={data.id} className="pelicula">
        <img
         className="portada"
         src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
         alt={data.title}
       />
       <h3 className="titulo-pelicula">{data.title}</h3>
     </div>
      ) : (
        <p>No se encontraron películas populares.</p>
      )}
      </div>
      <Footer/>
      </div>

    );
}