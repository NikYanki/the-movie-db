import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ISearchResponse, IStateSearch} from "../../interfaces";
import {detailsFilmService, searchMoviesService} from "../../services";

const initialState: IStateSearch = {
    movies: [],
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<ISearchResponse, string>(
    "searchMoviesSlice/getAll",
    async (params, {rejectWithValue}) => {
        try {
            const {data} = await searchMoviesService.getAll(params);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const searchMoviesSlice = createSlice({
    name: "searchMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload.results;
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

const {reducer: searchMoviesReducer} = searchMoviesSlice;

const searchMoviesActions = {
    getAll
};

export {
    searchMoviesActions,
    searchMoviesReducer
};