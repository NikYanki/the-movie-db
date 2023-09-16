import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {
    detailsFilmReducer,
    genresReducer,
    moviesByGenresReducer,
    moviesReducer,
    nowPlayingMoviesReducer,
    popularMoviesReducer,
    searchMoviesReducer,
    themeReducer,
    topRatedMoviesReducer,
    tvReducer,
    upcomingMoviesReducer
} from "../slices";

const rootReducer = combineReducers({
    themeReducer,
    moviesReducer,
    topRatedMoviesReducer,
    detailsFilmReducer,
    genresReducer,
    nowPlayingMoviesReducer,
    popularMoviesReducer,
    searchMoviesReducer,
    upcomingMoviesReducer,
    tvReducer,
    moviesByGenresReducer

});
const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type {
    RootState,
    AppDispatch,
    AppStore
};

export {
    setupStore
};