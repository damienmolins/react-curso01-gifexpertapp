import React from 'react';
//import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Prueba <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
        jest.clearAllMocks();
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        // { target: { value } } igual a { target: { value : value } }
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la información on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Un texto cualquiera';
        input.simulate('change', { target: { value } });
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() { } });
        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value').trim()).toBe('');
    });



})
