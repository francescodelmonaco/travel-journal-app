import { useGlobalContext } from "../contexts/GlobalContext"

// components
import Form from "../components/Form";
import PostCard from "../components/PostCard";

export default function Home() {
    const {
        isOpen,
        setIsOpen,
        query,
        setQuery,
        searchedPosts,
        moodFilter,
        setMoodFilter,
        effortFilter,
        setEffortFilter
    } = useGlobalContext();

    return (
        <>
            <div className="mt-5 flex justify-between gap-5 bg-(--salvia) p-2 rounded-full shadow">
                <div className="flex justify-between gap-5 w-1/6">
                    <select
                        name="mood-filter"
                        className="bg-(--street) px-3 rounded-full text-(--white) cursor-pointer shadow w-1/2"
                        value={moodFilter}
                        onChange={e => setMoodFilter(e.target.value)}
                    >
                        <option value="">Voto</option>
                        <option value="happy">★★★★★</option>
                        <option value="neutral">★★☆☆☆</option>
                        <option value="sad">☆☆☆☆☆</option>
                    </select>

                    <select
                        name="effort-filter"
                        className="bg-(--street) px-3 rounded-full text-(--white) cursor-pointer shadow w-1/2"
                        value={effortFilter}
                        onChange={e => setEffortFilter(e.target.value)}
                    >
                        <option value="">Impegno</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <input
                    type="search"
                    name="search"
                    placeholder="Cerca un'attività..."
                    className="border border-(--street) bg-(--white) rounded-xl px-3 w-2/3 shadow"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />

                <button
                    className="bg-(--street) text-white py-1.5 px-2 w-1/6 h-10 rounded-full shadow shadow-gray-500 cursor-pointer"
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