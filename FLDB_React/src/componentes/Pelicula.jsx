import { useFetchPelicula, useFetchPlataformas, useFetchVideos } from "../funciones/useFetch";
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
  const urlPlataformas = useMemo(() => `https://api.themoviedb.org/3/movie/${idPelicula}/watch/providers`, [idPelicula]);
  const urlVideos = useMemo(() => `https://api.themoviedb.org/3/movie/${idPelicula}/videos?language=es-ES`, [idPelicula]);


  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
  }), []);

  const { data } = useFetchPelicula(url, options);
  const { datosVideos } = useFetchVideos(urlVideos, options);
  const { datos } = useFetchPlataformas(urlPlataformas, options);


  const comprobacionDatos = (datos) => {
    if (!datos || !datos.results || !datos.results.ES || !datos.results.ES.flatrate) {
      return "No hay plataformas";
    }
    return (
      <div className="plataformas">
        {datos.results.ES.flatrate.map((proveedor, index) => {
          return (
            <div key={index} className="plataformas-imagenes">
              <img
                src={`https://image.tmdb.org/t/p/w500${proveedor.logo_path}`}
                alt={proveedor.provider_name}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const comprobacionVideos = ((datosVideos) => {
    if (!datosVideos || !datosVideos.results) {
      return 'No hay videos disponibles';
    }
    else {
      return (
        <div className="videos">
          {datosVideos.results.map((videos) => {
            return (
              <div key={videos.id} className="video-individual">
                <iframe
                  src={`https://www.youtube.com/embed/${videos.key}`}
                  title={videos.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen />

              </div>
            )
          })}
        </div>
      );
    }
  })


  const number = ((valor) => {
    return Math.round(valor * 10) / 10;
  })

  return (

    <div className="wrapper">
      <Nav />
      {data ? (
        <div key={data.id} className="pelicula-general">
          {data.poster_path ? (
            <img className="portada-pelicula" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.tittle} />
            ) : (
              <img className="portada-pelicula" src={`../../images/not-found.jpg`}
            alt={data.tittle} />
              )}
          
          <div className="info-esencial">
            <h2>
              Información general
            </h2>
            <p>
              Titulo: {data.title}
            </p>
            <p>
              Genero: {
                data.genres ? (data.genres.map((genero, index) => (
                  genero.name + (index < data.genres.length - 1 ? ',' : '.')
                ))) : (`-`)
              }
            </p>
            <p>
              Fecha de lanzamiento: {
                data.release_date ? (
                  format(new Date(data.release_date), "dd/MM/yyyy", { locale: es })
                ) : (`-`)
                
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

            <div>
              Plataformas streaming: {comprobacionDatos(datos)}
            </div>

          </div>
          <div className="desc">
            <h2>Descripción</h2>
            <p>
              {data.overview ? (data.overview) : (`No hay descripción`)}
            </p>
          </div>
          <div className="trailers">
            <h2>Videos</h2>
              {comprobacionVideos(datosVideos)}
            
          </div>
        </div>
      ) : (
        null
        //<p>No hay peliculas</p>
      )
      }
      <Footer />
    </div>

  );
}