import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe('pruebas sobre <GifGrid />', () => {

    const category = 'Dragon Ball';

    test('snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes...', () => {
        const gifs = [
            {
                id: 'ABC',
                url: 'https:cualquierurl.com/algo.jpg',
                title: 'Cualquier cosa'
            }
        ];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });


})
