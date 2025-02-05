import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function Nav() {


    const navigate = useNavigate();

    const buscar = (e) => {
        e.preventDefault(); 
        const query = e.target.busqueda.value;
        console.log("Buscando:", query);
        navigate(`/busqueda?query=${query}`);
    };
    return (
        <div className="nav">
                
            <ul>
            
            <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/populares'}>
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
                <Link to={'/mejor-valoradas'}>
                Mejores valoradas
                    </Link>
                    
                </li>
                <li className="form">
                    <form action="/busqueda" method="post" onSubmit={(e) => buscar(e)}>
                        <input type="text" id="busqueda" name="busqueda"/>
                        <input type="submit" value='Enviar' className="boton-enviar"/>
                    </form>
                </li>
            </ul>
        </div>
    );
}