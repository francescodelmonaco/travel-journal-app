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



    // creazione nuovo post
    const [post, setPost] = useState({
        event: "",
        location: "",
        date: "",
        description: "",
        cost: ""
    });

    const handleChange = e => {
        setPost(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    async function createPost(e) {
        e.preventDefault();

        const { error } = await supabase
            .from("posts")
            .insert({
                event: post.event,
                location: post.location,
                date: post.date,
                description: post.description,
                cost: post.cost
            })
        setPost({
            event: "",
            location: "",
            date: "",
            description: "",
            cost: ""
        })
        await fetchPosts()

        if (error) {
            console.error(error)
        }
    };



    // destructuring
    const value = {
        posts,
        handleChange,
        post,
        createPost
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };