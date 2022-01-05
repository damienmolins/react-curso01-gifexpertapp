import { GifGridItem } from './GifGridItem';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { data: imagenes, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">
                {
                    imagenes.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>
    );
}
