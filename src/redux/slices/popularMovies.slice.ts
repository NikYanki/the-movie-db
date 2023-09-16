import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {popularMoviesService} from "../../services";
import {IStatePopularMovies, IMoviesResponse} from "../../interfaces";

const initialState: IStatePopularMovies = {
    popularMovies: [],
    page: 0,
    total_pages: 0,
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IMoviesResponse, number>(
    "popularMoviesSlice/getAll",
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await popularMoviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const popularMoviesSlice = createSlice({
    name: "popularMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.popularMovies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = 500;
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

const {reducer: popularMoviesReducer} = popularMoviesSlice;

const popularMoviesActions = {
    getAll
};

export {
    popularMoviesActions,
    popularMoviesReducer
};