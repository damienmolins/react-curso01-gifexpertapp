import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('pruebas para <GifExpertApp />', () => {

    test('snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const defaultCategories = ['Dragon Ball', 'One Punch'];
        const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);
    })

})
