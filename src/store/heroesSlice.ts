import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../api';
import { HeroType } from './types';

interface IInitialState {
    heroesList: HeroType[];
    error: boolean;
    loading: boolean;
}

const initialState: IInitialState = {
    heroesList: [],
    error: false,
    loading: false,
};

export const getHeroes = createAsyncThunk('heroesSlice/getHeroes', async () => {
    try {
        const response = await axios.get('people');
        return response.data;
    } catch (error) {
        console.error(error);
    }
});

const heroesSlice = createSlice({
    name: 'heroesSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getHeroes.pending, (state: IInitialState) => {
            state.loading = true;
        });
        builder.addCase(getHeroes.fulfilled, (state: IInitialState, action) => {
            state.heroesList = action.payload.results;
            state.loading = false;
        });
        builder.addCase(getHeroes.rejected, (state: IInitialState) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export default heroesSlice.reducer;
