import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../api';
import { HeroType } from './types';

interface IInitialState {
    heroesList: HeroType[];
    error: boolean;
    loading: boolean;
    currentPage: number;
    totalPage: number;
}

const initialState: IInitialState = {
    heroesList: [],
    error: false,
    loading: false,
    currentPage: 1,
    totalPage: 0,
};

export const getHeroes = createAsyncThunk(
    'heroesSlice/getHeroes',
    async (page: number) => {
        try {
            const response = await axios.get(`people?page=${page}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

const heroesSlice = createSlice({
    name: 'heroesSlice',
    initialState,
    reducers: {
        setPage: (state: IInitialState, action) => {
            return {
                ...state,
                currentPage: action.payload,
            };
        },
    },
    extraReducers(builder) {
        builder.addCase(getHeroes.pending, (state: IInitialState) => {
            state.loading = true;
        });
        builder.addCase(getHeroes.fulfilled, (state: IInitialState, action) => {
            state.heroesList = action.payload.results;
            state.totalPage = action.payload.count;
            state.loading = false;
        });
        builder.addCase(getHeroes.rejected, (state: IInitialState) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const { setPage } = heroesSlice.actions;

export default heroesSlice.reducer;
