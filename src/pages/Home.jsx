import { useGlobalContext } from "../contexts/GlobalContext"

// components
import Form from "../components/Form";
import PostCard from "../components/PostCard";
import FilterBar from "../components/FilterBar";

export default function Home() {
    const {
        isOpen,
        setIsOpen,
        query,
        setQuery,
        searchedPosts
    } = useGlobalContext();

    return (
        <>
            <div className="mt-5 flex justify-between gap-3">
                <input
                    type="search"
                    name="search"
                    placeholder="Cerca un'attività..."
                    className="border border-(--street) bg-(--white) rounded-full px-3 w-3/4 shadow"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />

                <button
                    className="bg-(--street) text-white py-2 px-2 w-1/4 rounded-full shadow shadow-gray-500 cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {
                        isOpen && (
                            <span>Chiudi form <i className="fa-solid fa-xmark"></i></span>
                        ) || (
                            <span>Crea post <i className="fa-solid fa-plus"></i></span>
                        )
                    }
                </button>
            </div>

            {
                isOpen && (
                    <Form />
                )
            }

            <FilterBar />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
                {
                    searchedPosts.map((post, index) => {
                        const { id, event, location, date, image } = post;

                        // from yyyy-mm-dd to dd-mm-yyyy
                        const newDate = date.split("-").reverse().join("/");

                        return (
                            <div key={index} className="bg-white rounded p-3 shadow shadow-gray-500">
                                <PostCard
                                    pageId={id}
                                    event={event}
                                    location={location}
                                    date={newDate}
                                    image={image}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}