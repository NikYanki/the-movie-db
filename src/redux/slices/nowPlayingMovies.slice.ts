import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {nowPlayingMoviesService} from "../../services";
import {IStateNowPlayingMovies, IMoviesResponse} from "../../interfaces";

const initialState: IStateNowPlayingMovies = {
    nowPlayingMovies: [],
    page: 0,
    total_pages: 0,
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IMoviesResponse, number>(
    "nowPlayingMovies/getAll",
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await nowPlayingMoviesService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const nowPlayingMoviesSlice = createSlice({
    name: "nowPlayingMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.nowPlayingMovies = action.payload.results;
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

const {reducer: nowPlayingMoviesReducer} = nowPlayingMoviesSlice;

const nowPlayingMoviesActions = {
    getAll
};

export {
    nowPlayingMoviesActions,
    nowPlayingMoviesReducer
};