import { getGifs } from '../../helpers/GetGifs'

describe('Prueba con GetGifs', () => {

    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);
    });

    //este no funciona xq devuelve undefined en la category (es lo que busca)
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs();
        expect(gifs.length).toBe(10);
    });

})
