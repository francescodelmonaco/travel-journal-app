import { useGlobalContext } from "../contexts/GlobalContext"

// components
import Form from "../components/Form";
import PostCard from "../components/PostCard";

export default function Home() {
    const { isOpen, setIsOpen, query, setQuery, searchedPosts, moodFilter, setMoodFilter } = useGlobalContext();

    return (
        <>
            <div className="pt-5 flex justify-between gap-5">
                <select
                    name="rating-filter"
                    className="bg-(--street) px-3 rounded-full text-(--white) cursor-pointer shadow"
                    value={moodFilter}
                    onChange={e => setMoodFilter(e.target.value)}
                >
                    <option value="">Filtra</option>
                    <option value="happy">★★★★★</option>
                    <option value="neutral">★★☆☆☆</option>
                    <option value="sad">☆☆☆☆☆</option>
                </select>

                <input
                    type="search"
                    name="search"
                    placeholder="Cerca un'attività..."
                    className="border border-(--street) bg-(--white) rounded-xl px-3 w-100"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />

                <button
                    className="bg-(--street) text-white py-1.5 px-2 w-10 h-10 rounded-full shadow shadow-gray-500 cursor-pointer"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {
                        isOpen && (
                            <i className="fa-solid fa-xmark"></i>
                        ) || (
                            <i className="fa-solid fa-plus"></i>
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