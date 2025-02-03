import { useMemo } from "react";
import { useFetch } from "../funciones/useFetch";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Trending } from "./Trending";

export function Home() {
    const url = "https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1";

    const options = useMemo(() => ({
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
    }), []);  // Dependencia correcta

    const { data } = useFetch(url, options);

    return (
        <div className="home2">
            <Nav />
            <div className="home-pagina">
                <div className="seccion1">
                    <div className="texto-bienvenida">
                        <p>Welcome to FLDB</p>
                    </div>
                    {data ? (
                        <div>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`}
                                alt={data.results[0].title}
                            />
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.results[1].poster_path}`}
                                alt={data.results[1].title}
                            />
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.results[2].poster_path}`}
                                alt={data.results[2].title}
                            />
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.results[3].poster_path}`}
                                alt={data.results[3].title}
                            />
                            <img
                                src={`https://image.tmdb.org/t/p/w500${data.results[4].poster_path}`}
                                alt={data.results[4].title}
                            />
                        </div>
                    ) : (<p>nada</p>)}
                </div>
                <div className="seccion2">
                    <h1 className="trending-h1">Trending:
                    </h1>
                    <Trending />
                </div>
            </div>
            <Footer />
        </div>
    );
}
