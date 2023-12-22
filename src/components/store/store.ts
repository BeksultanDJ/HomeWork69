import { configureStore } from '@reduxjs/toolkit';
import showReducer from '../showListSlice.ts';

const store = configureStore({
    reducer: {
        shows: showReducer,
    },
});

export default store;
