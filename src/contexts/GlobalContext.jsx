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



    // show su post specifico
    const [singlePost, setSinglePost] = useState({});

    async function fetchSinglePost(id) {
        setSinglePost({})

        const { data, error } = await supabase
            .from("posts")
            .select()
            .eq('id', id)
            .single() // per restituire un oggetto visto che supabase restituisce sempre un array
        setSinglePost(data || {})

        if (error) {
            console.error(error)
        }
    };



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

        // chiudo form
        setIsOpen(prev => !prev)

        // svuoto form
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



    // gestione apertura form
    const [isOpen, setIsOpen] = useState(false);



    // eliminazione di un post
    async function removePost(id) {
        await supabase
            .from("posts")
            .delete()
            .eq('id', id)

        await fetchPosts()
    };



    // destructuring
    const value = {
        posts,
        handleChange,
        post,
        createPost,
        isOpen,
        setIsOpen,
        removePost,
        fetchSinglePost,
        singlePost
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };