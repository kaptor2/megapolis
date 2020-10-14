import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from 'redux/reducers';

const middleware = getDefaultMiddleware({
    immutableCheck: true,
    serializableCheck: false,
    thunk: true,
});

export const store = configureStore({
    reducer: { reducer },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});