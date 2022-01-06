import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('pruebas en custom hook useFetchGifs', () => {

    test('debe retornar el estado inicial ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate({ timeout: 4000 });

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));

        await waitForNextUpdate({ timeout: 4000 });

        const { data, loading } = result.current;
        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });


})
