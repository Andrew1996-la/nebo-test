import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    heroesList: [],
};

export const getHeroes = createAsyncThunk('heroesSlice/getHeroes', async () => {

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
