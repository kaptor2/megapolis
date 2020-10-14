import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchList } from '../redux/actions';

export const TestComponent = () => {
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(fetchList())} >Тест</button>
    );
}