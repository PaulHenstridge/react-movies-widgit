import { useState } from 'react'
import MoviesDisplay from "../components/MoviesDisplay";
import MoreInfo from "../components/MoreInfo";
import AddMovie from '../components/AddMovie';

const MovieWidgit = () => {

    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Spider-Man: Into the Spider-Verse",
            url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
            id: 2,
            name: "Life Itself",
            url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
            id: 3,
            name: "Mary Queen of Scots",
            url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
            id: 4,
            name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
            id: 5,
            name: "Captain Marvel",
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
    ])

    const addMovie = newMovie => {
        let movieObj = {
            id: 6,
            name: newMovie,
            url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }

        setMovies([...movies, movieObj])
    }
    return (
        <>
            <h1>Here be the Movies, Arrrr!</h1>
            <MoviesDisplay movies={movies} />
            <MoreInfo />
            <AddMovie onAddMovie={newMovie => addMovie(newMovie)} />
        </>

    );
}

export default MovieWidgit;