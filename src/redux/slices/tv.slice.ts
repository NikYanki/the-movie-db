import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IStateTv, IMoviesResponse} from "../../interfaces";
import {tvService} from "../../services";

const initialState: IStateTv = {
    tv: [],
    page: 0,
    total_pages: 0,
    errors: null,
    loading: false
};

const getAll = createAsyncThunk<IMoviesResponse, number>(
    "tvSlice/getAll",
    async (page: number, {rejectWithValue}) => {
        try {
            const {data} = await tvService.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    });

const tvSlice = createSlice({
    name: "topRatedMoviesSlice",
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.tv = action.payload.results;
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

const {reducer: tvReducer} = tvSlice;

const tvActions = {
    getAll
};

export {
    tvActions,
    tvReducer
};