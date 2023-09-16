import React, {FC, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";

import styles from "./MovieSearch.module.css";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {searchMoviesActions} from "../../redux/slices";

const MovieSearch: FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    const searchMovies = async () => {
        await dispatch(searchMoviesActions.getAll(searchTerm));

    };
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.searchMoviesReducer);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchMovies();
    };

    return (
        <div className={styles.searchContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="🔎    Search movie   "
                    value={searchTerm}
                    onChange={handleInputChange}
                />

            </form>
            <div className={styles.answer}>
                {movies.map((movie) => (
                    <Link key={movie.id} to={`/movies/${movie.id}`}
                          className={styles.movieName}>{movie.name}<br/></Link>
                ))}
            </div>


        </div>


    );
};

export {MovieSearch};
