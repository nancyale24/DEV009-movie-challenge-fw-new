import { useEffect, useState } from "react";
import Header from "../components/Header";
import Pagination from "./pagination";

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getAllMovies = async () => {
    //definimos nuestra funcion llamada getAllMovies
    const url =
      "https://api.themoviedb.org/3/trending/all/week?api_key=2924a35667e267b302801c8a2ba12282";
    //Esta dirección web es la forma en que el programa accede a una base de datos de películas en línea
    const res = await fetch(url);
    // Esta línea de código utiliza la dirección web (url) para pedir información a la base de datos de películas en línea
    //se almacena en la variable res
    //await se utiliza aquí para esperar a que se obtenga la respuesta antes de continuar.
    const data = await res.json();
    // La respuesta que obtuvimos en el paso anterior es en realidad en un formato especial.
    //Esta línea de código la convierte en un formato que el programa puede entender y trabajar, y guarda esa información en la variable data
    console.log(data);
    setMovies(data.results);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);
  //La función useEffect se utiliza aquí para decirle al programa que cuando la página cargue por primera vez (lo que significa []),
  //debe llamar a la función getAllMovies

  return (
    <div>
      <div className="decorLine"></div>

      <Header />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="conteinerMovies">
        {movies.map((movie) => (
          <div className="cardMovie" key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.name}
            />
            <div className="nameMovie">{movie.title || movie.name}</div>

            {movie.release_date ? (
              <p>{new Date(movie.release_date).getFullYear()}</p>
            ) : (
              <p>--</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


