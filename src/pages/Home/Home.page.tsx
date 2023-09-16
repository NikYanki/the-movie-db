import React, {FC, useEffect, useState} from 'react';

import styles from "./HomePage.module.css";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {
    moviesActions,
    nowPlayingMoviesActions,
    upcomingMoviesActions
} from "../../redux/slices";
import {Loader, MovieCarousel} from "../../components";

const HomePage: FC = () => {
    const dispatch = useAppDispatch();
    const {movies, loading, page, total_pages} = useAppSelector(state => state.moviesReducer);
    const {nowPlayingMovies} = useAppSelector(state => state.nowPlayingMoviesReducer);
    const {upcomingMovies} = useAppSelector(state => state.upcomingMoviesReducer);

    useEffect(() => {
        dispatch(moviesActions.getAll(1));
        dispatch(nowPlayingMoviesActions.getAll(2));
        dispatch(upcomingMoviesActions.getAll(2));

    }, [dispatch]);

    return (
        <div className={styles.homePage}>
            {loading && <Loader/>}
            <h2>Popular movies</h2>
            <MovieCarousel movies={movies}/>
            <h2>Now playing movies</h2>
            <MovieCarousel movies={nowPlayingMovies}/>
            <h2>Upcoming</h2>
            <MovieCarousel movies={upcomingMovies}/>
        </div>
    );
};

export {HomePage};