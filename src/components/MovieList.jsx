import { Movie } from "./Movie";

function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export { MovieList };
