import React, { useContext, useState, useEffect } from "react";


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const searchURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(true);
    
   
   
    const fetchData = async (url) => {
        try {
            setLoading(true);
            const response = await fetch(url)
            const {drinks} = await response.json()
            setSearchData(drinks);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(`${searchURL}${searchTerm}`);
    }, [searchTerm])
    
 

    return (
        <AppContext.Provider value={{setLoading,searchTerm,setSearchTerm,loading,searchData}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };