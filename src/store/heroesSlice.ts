import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../api';
import { HeroType } from './types';
import { fetchAdditionalData } from './utils';

interface IInitialState {
    heroesList: HeroType[];
    hero: HeroType | null;
    error: boolean;
    loading: boolean;
    currentPage: number;
    totalPage: number;
}

const initialState: IInitialState = {
    heroesList: [],
    hero: null,
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

export const getHero = createAsyncThunk(
    'heroesSlice/getHero',
    async (name: string) => {
        try {
            const response = await axios.get(`people/?search=${name}`);
            const heroData = response.data.results;

            const enhancedHeroData = await Promise.all(
                heroData.map(async (hero: HeroType) => {
                    const [homeworld, films, species, vehicles, starships] =
                        await Promise.all([
                            axios.get(hero.homeworld).then((res) => res.data),
                            fetchAdditionalData(hero.films),
                            fetchAdditionalData(hero.species),
                            fetchAdditionalData(hero.vehicles),
                            fetchAdditionalData(hero.starships),
                        ]);

                    return {
                        ...hero,
                        homeworld,
                        films,
                        species,
                        vehicles,
                        starships,
                    };
                })
            );

            return enhancedHeroData;
        } catch (error) {
            console.error(error);
            throw error;
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
        resetHero: (state: IInitialState) => {
            return {
                ...state,
                hero: null,
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

        builder.addCase(getHero.pending, (state: IInitialState) => {
            state.loading = true;
        });
        builder.addCase(getHero.fulfilled, (state: IInitialState, action) => {
            state.hero = action.payload[0];
            state.loading = false;
        });
        builder.addCase(getHero.rejected, (state: IInitialState) => {
            state.loading = false;
            state.error = true;
        });
    },
});

export const { setPage, resetHero } = heroesSlice.actions;

export default heroesSlice.reducer;
