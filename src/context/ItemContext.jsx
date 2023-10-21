import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ItemContext = createContext()

// eslint-disable-next-line react/prop-types
export const ItemContextProvider = ({ children }) => {
    const [results, setResults] = useState([])

    const getItems = async () => {
        const { data } = await axios.get('https://api.spacexdata.com/v3/launches')
        setResults(data);
    }

    useEffect(() => {
        getItems()
    }, [])

    const itemInfo = {
        results
    }


    return (
        <ItemContext.Provider value={itemInfo}>
            {children}
        </ItemContext.Provider>
    )
}

// Custom hook
export const useItems = () => useContext(ItemContext)