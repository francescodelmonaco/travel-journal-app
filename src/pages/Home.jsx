import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext"

// components
import Form from "../components/Form";

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

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    posts.map((post, index) => {
                        const { id, event, location, date, image } = post;

                        // from yyyy-mm-dd to dd-mm-yyyy
                        const newDate = date.split("-").reverse().join("/");

                        return (
                            <div key={index} className="bg-white rounded p-3 shadow shadow-gray-500">
                                <Link
                                    to={`/${id}`}
                                    className="flex flex-col gap-2"
                                >
                                    <img
                                        src={image || "https://hips.hearstapps.com/hmg-prod/images/logan-armstrong-hvhfqhdyciu-unsplash-1-1606122043.jpg?crop=0.66640625xw:1xh;center,top&resize=640:*"}
                                        alt={`Foto ${event}`}
                                        className="rounded relative"
                                    />
                                    <h3 className="font-bold text-xl">{event}</h3>
                                    <p>📍 {location}</p>
                                    <p className="absolute self-end mt-2 me-2 bg-white py-1.5 px-3 rounded-full shadow shadow-gray-500">{newDate}</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}