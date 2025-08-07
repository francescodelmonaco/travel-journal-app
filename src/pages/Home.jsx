import { useGlobalContext } from "../contexts/GlobalContext"

// components
import Form from "../components/Form";
import PostCard from "../components/PostCard";

export default function Home() {
    const { posts, isOpen, setIsOpen } = useGlobalContext();

    return (
        <>
            <button
                className="bg-(--street) text-white py-1.5 px-2 w-10 h-10 rounded-full shadow shadow-gray-500 cursor-pointer self-end"
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

            {
                isOpen && (
                    <Form />
                )
            }

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 pb-5">
                {
                    posts.map((post, index) => {
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