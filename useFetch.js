import { useEffect, useState } from "react";


export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        hasError: null,
        isLoading: true,
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })

    }

    useEffect(() => {
        getFetch();
    
    }, [url])
    


    return state;
}
