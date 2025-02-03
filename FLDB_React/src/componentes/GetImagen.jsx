//import { useEffect, useState } from "react";
import { useFetch } from "../funciones/useFetch";
import { useMemo } from "react";

export function GetImagen({ url }) {

    const options = useMemo(() => ({
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }), []);

    const { data } = useFetch(url, options);


    return (
        <div className="general-imagen" key={url}>
            {data ? (
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`}
                        alt={data.results[0].title} />
                </div>
            ) :
                (<p>nada</p>)}
        </div>
    );
}
