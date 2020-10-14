import { createAction } from "@reduxjs/toolkit";

export const listGetAll = createAction('LIST_GET_ALL');
export const loading = createAction('LOADING');

export const fetchList = () => async dispatch => {
    try {
        dispatch(loading(true));
        const response = await fetch('https://test.megapolis-it.ru/api/list');
        if (!response.ok) throw `Ошибка HTTP: ${response.status}`;
        const json = await response.json()
        dispatch(listGetAll(json.data));
        dispatch(loading(false));
    } catch (error) {
        alert(error);
    }
}