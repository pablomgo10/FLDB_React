
import { Footer } from "./Footer";
import { Listado } from "./Listado";
import { Nav } from "./Nav";
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export function Home() {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const paginaActual = parseInt(searchParams.get("page")) || 1;

  const cambiarPagina = (nuevaPagina) => {
    if (nuevaPagina < 1) return;
    navigate (`?page=${nuevaPagina}`)
  }

  useEffect(() => {
    setTimeout(()=>{
      window.scrollTo(0, 0);
    }, 300);
  }, [paginaActual]);

  return (
    <div className="home">
      <Nav/>
      <h1>Películas populares:</h1>
      <Listado pagina={paginaActual}/>
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
