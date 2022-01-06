import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = ({ defaultCategories = [] }) => {

    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return <>
        <h1>GifExpertApp</h1>
        <hr />
        <AddCategory setCategories={setCategories} />
        <ol>
            {
                categories.map(
                    category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                )
            }
        </ol>
    </>;
}

GifExpertApp.propTypes = {
    defaultCategories: PropTypes.array
}

export default GifExpertApp;