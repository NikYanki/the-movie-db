import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenresResponse, IStateGenres} from "../../interfaces";
import {genresService} from "../../services";

const initialState: IStateGenres = {
    genres: [],
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IGenresResponse, void>(
    "genresSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.genres = action.payload.genres;
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

const {reducer: genresReducer} = genresSlice;

const genresActions = {
    getAll
};

export {
    genresActions,
    genresReducer
};