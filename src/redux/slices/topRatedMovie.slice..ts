import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IStateTopRatedMovies, IMoviesResponse} from "../../interfaces";
import {topRatedMoviesService} from "../../services";

const initialState: IStateTopRatedMovies = {
    topRatedMovies: [],
    page: 0,
    total_pages: 0,
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IMoviesResponse, number>(
    "topRatedMoviesSlice/getAll",
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await topRatedMoviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const topRatedMoviesSlice = createSlice({
    name: "topRatedMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.topRatedMovies = action.payload.results;
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

const {reducer: topRatedMoviesReducer} = topRatedMoviesSlice;

const topRatedMoviesActions = {
    getAll
};

export {
    topRatedMoviesActions,
    topRatedMoviesReducer
};