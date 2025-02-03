import { Listado } from "./Listado";

const url= 'https://api.themoviedb.org/3/trending/movie/day?language=es-ES';

export function Trending()
{
    return(
        <div>
            <Listado url={url} />
        </div>
    );
}