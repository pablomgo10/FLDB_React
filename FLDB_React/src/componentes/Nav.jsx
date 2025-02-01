import { Link } from "react-router-dom";

export function Nav() {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to={'/'}>
                        Populares
                    </Link>
                </li>
                <li>
                    <Link to={'/cartelera'}>
                        En Cartelera
                    </Link>

                </li>
                <li>
                    <Link to={'/proximamente'}>
                        Proximamente
                    </Link>

                </li>
                <li>
                    Mejores valoradas
                </li>
            </ul>
        </div>
    );
}