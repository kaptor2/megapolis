import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    loading: false,
    Error: ''
};

export const reducer = createReducer(initialState, {
    LIST_GET_ALL: (state, action) => { state.list = action.payload },
    LOADING: (state, action) => { state.loading = action.payload }
});