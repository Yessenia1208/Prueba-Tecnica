import React, { useState, useEffect } from "react";
import data from "../data/sample.json";
import "../styles/containerHome.css";
import "../styles/header.css";
import "../styles/Movies.css";
import Loading from "./Loading";
import Error from "./Error";
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setPopupData } from "../redux/reducers/peliculas";

const Peliculas = () => {
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const filterMovies = data.entries
            .filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20);

        dispatch(setMovies(filterMovies));
    }, [dispatch]);

    useEffect(() => {
        setLoading(true);
        try {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }, []);

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error/>;
    }

    return (
        <div>
            <nav className="bar2">
                <a className="title2">Popular Movies</a>
            </nav>
            <div>
                <div className="movies-container">
                    {movies.map(movie => (
                        <div key={movie.title} className="movie-container" onClick={() => dispatch(setPopupData(movie))}>
                            <img src={movie.images["Poster Art"].url} alt={movie.title} className="movie-image" />
                            <div className="mouse-positon">
                                <h2>{movie.title}</h2>
                                <p>{movie.description}</p>
                                <p>Year: {movie.releaseYear}</p>
                            </div>
                            <h2>{movie.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Peliculas;
