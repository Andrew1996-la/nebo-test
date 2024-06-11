import { configureStore } from '@reduxjs/toolkit';
import heroesSlice from './heroesSlice';

export const store = configureStore({
    reducer: {
        heroes: heroesSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
