import { Link } from "react-router-dom";

export function Nav(){
    return(
        <div className="nav">
            <ul>
                <li>
                    <Link to={'/'}>
                    Populares
                    </Link>
                </li>
                <li>
                    En Cartelera
                </li>
                <li>
                    Proximamente
                </li>
                <li>
                    Mejores valoradas
                </li>
            </ul>
        </div>
    );
}