
import { Footer } from "./Footer";
import { Listado } from "./Listado";
import { Nav } from "./Nav";

export function Proximamente() {
  
  const url = `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1&region=ES`;
  return (
    <div className="home">
      <Nav/>
      <h1>Películas en cartelera:</h1>
      <Listado url={url}/>
      <Footer/>
    </div>
  );

  
}
