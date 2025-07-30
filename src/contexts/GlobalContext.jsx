import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../supabaseClient";

// creo provider
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    // index di tutti i posts
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        const { data, error } = await supabase
            .from("posts")
            .select("*")
        setPosts(data)

        if (error) {
            console.error(error)
        }
    };

    useEffect(() => { fetchPosts() }, []);

    // destructuring
    const value = {
        posts
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };