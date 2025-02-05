
import { Footer } from "./Footer";
import { Listado } from "./Listado";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from "react-router-dom";

export function Busqueda() {

    const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paginaActual = parseInt(searchParams.get("page")) || 1;

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina < 1) return;
    navigate (`?query=${query}&page=${nuevaPagina}`)
  }

  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 300);
  }, [paginaActual]);

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=es-ES&page=${paginaActual}`;

  return (
    <div className="populares">
      <Nav/>
      <h1 className="titulo">{`Películas relacionadas con : '${query}'`}</h1>
      <Listado url={url}/>
      <div className="botones-pelicula">
      <button onClick={() => cambiarPagina(paginaActual - 1)} className="atras-peliculas">
      <FontAwesomeIcon className="flecha-izquierda" icon={faArrowLeft} />
      </button>
      <button onClick={() => cambiarPagina(paginaActual + 1)} className="siguiente-peliculas">
      <FontAwesomeIcon className="flecha-derecha" icon={faArrowRight} />
            </button>
      </div>

      <Footer/>
    </div>
  );

  
}
