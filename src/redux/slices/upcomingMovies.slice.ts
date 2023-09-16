import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IStateUpcomingMovies, IMoviesResponse} from "../../interfaces";
import {upcomingMoviesService} from "../../services";

const initialState: IStateUpcomingMovies = {
    upcomingMovies: [],
    page: 0,
    total_pages: 0,
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IMoviesResponse, number>(
    "upcomingMovies/getAll",
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await upcomingMoviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const upcomingMoviesSlice = createSlice({
    name: "upcomingMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.upcomingMovies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
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

const {reducer: upcomingMoviesReducer} = upcomingMoviesSlice;

const upcomingMoviesActions = {
    getAll
};

export {
    upcomingMoviesActions,
    upcomingMoviesReducer
};