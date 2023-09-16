import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IDetailsMovies, IVideo, IStateDetailsMovie} from "../../interfaces";
import {detailsFilmService} from "../../services";

const initialState: IStateDetailsMovie = {
    video: [],
    movie: null,
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IDetailsMovies, string>(
    "detailsFilmSlice/getAll",
    async (id, {rejectWithValue}) => {
        try {
            const {data: details} = await detailsFilmService.getMovie(id);
            return details;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });
const getVideo = createAsyncThunk<IVideo[], string>(
    "detailsFilmSlice/getVideo",
    async (id, {rejectWithValue}) => {
        try {
            const {data: {results}} = await detailsFilmService.getVideo(id);
            return results;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const detailsFilmSlice = createSlice({
    name: "detailsFilmSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movie = action.payload;
            state.loading = false;
        })

        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload;
            state.loading = false;
        })
        .addCase(getAll.pending, (state) => {
            state.loading = true;
        })
        .addCase(getVideo.fulfilled, (state, action) => {
            state.video = action.payload;
        })
        .addCase(getVideo.rejected, (state, action) => {
            state.errors = action.payload;
        })


});

const {reducer: detailsFilmReducer} = detailsFilmSlice;

const detailsFilmActions = {
    getAll,
    getVideo
};

export {
    detailsFilmActions,
    detailsFilmReducer
};