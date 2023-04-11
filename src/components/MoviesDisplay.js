import Movie from "./Movie";

const MoviesDisplay = ({ movies }) => {

    return (
        <>
            {movies.map(movie => <Movie name={movie.name} />)}
        </>
    );
}

export default MoviesDisplay;