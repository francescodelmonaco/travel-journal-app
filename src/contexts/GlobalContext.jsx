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
        cost: "",
        image: null,
        mood: "",
        pros: "",
        cons: "",
        effort: 1
    });

    const handleChange = e => {
        const { name, value, type, files } = e.target; // destructuring dei type del form

        setPost(prev => {
            return {
                ...prev,
                [name]: type === "file" ? files[0] : value
            }
        })
    }

    async function createPost(e) {
        e.preventDefault();

        let imageUrl = null;

        // Upload dell'immagine se presente
        if (post.image) {
            const fileName = `${Date.now()}_${post.image.name}`;

            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('posts-images') // nome del bucket Supabase
                .upload(fileName, post.image);

            if (uploadError) {
                console.error('Errore upload immagine:', uploadError);
                return;
            }

            // URL pubblico dell'immagine
            const { data: { publicUrl } } = supabase.storage
                .from('posts-images')
                .getPublicUrl(fileName);

            imageUrl = publicUrl;
        }

        const { error } = await supabase
            .from("posts")
            .insert({
                event: post.event,
                location: post.location,
                date: post.date,
                description: post.description,
                cost: post.cost,
                image: imageUrl,
                mood: post.mood,
                pros: post.pros,
                cons: post.cons,
                effort: post.effort
            })

        // chiudo form
        setIsOpen(prev => !prev)

        // svuoto form
        setPost({
            event: "",
            location: "",
            date: "",
            description: "",
            cost: "",
            image: null,
            mood: "",
            pros: "",
            cons: "",
            effort: 1
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
        const { error } = await supabase
            .from("posts")
            .delete()
            .eq('id', id)

        if (error) {
            console.error('Errore eliminazione post:', error)
            return
        }

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