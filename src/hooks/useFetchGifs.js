import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState(
        {
            data: [],
            loading: true
        });

    //Se puede hacer tranquilamente sin el setTimeout...
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    //console.log(imgs);
                    setState({
                        data: imgs, loading: false
                    });
                }, 2000);
            })
    }, [category])

    return state;
}
