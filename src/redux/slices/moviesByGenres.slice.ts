import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IState, IMoviesResponse} from "../../interfaces";
import {moviesByGenresService} from "../../services";

const initialState: IState = {
    movies: [],
    page: 0,
    total_pages: 0,
    errors: null,
    loading: false
};

interface IConfig {
    currentPage: number,
    id: string | undefined
}

const getAll = createAsyncThunk<IMoviesResponse, IConfig>(
    "moviesByGenres/getAll",
    async ({currentPage, id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesByGenresService.getAll(currentPage, id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const MoviesByGenresSlice = createSlice({
    name: "MoviesByGenresSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = 50;
            state.loading = false;
        })

        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload;
            state.loading = false;
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true;
        })


});

const {reducer: moviesByGenresReducer} = MoviesByGenresSlice;

const moviesByGenresActions = {
    getAll
};

export {
    moviesByGenresActions,
    moviesByGenresReducer
};