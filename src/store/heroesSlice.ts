import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../api';

const initialState = {
    heroesList: [],
    error: false,
    loading: false,
};

export const getHeroes = createAsyncThunk('heroesSlice/getHeroes', async () => {
    try {
        const response = await axios.get('people/1/');
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
        builder.addCase(getHeroes.pending, (state, action) => {});
        builder.addCase(getHeroes.fulfilled, (state, action) => {});
        builder.addCase(getHeroes.rejected, (state, action) => {});
    },
});

export default heroesSlice.reducer;
