import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react";

export default function PostDetails() {
    const { id } = useParams();
    const { removePost, fetchSinglePost, singlePost } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => { fetchSinglePost(id) }, [id]);

    const { event, location, date, description, cost, image } = singlePost;

    // from yyyy-mm-dd to dd-mm-yyyy
    const newDate = date ? date.split("-").reverse().join("/") : "";

    return (
        <>
            <button
                className="bg-red-900 text-white py-1.5 px-2 w-10 h-10 rounded-full shadow cursor-pointer self-end"
                onClick={() => {
                    removePost(id);
                    navigate("/")
                }}
            >
                <i className="fa-solid fa-trash"></i>
            </button>

            <div>
                {image && (
                    <img
                        src={image}
                        alt={event}
                        className="w-full h-64 object-cover rounded mb-4"
                    />
                )}
                <h1 className="text-2xl font-bold">{event} | 📍 {location}</h1>
                <p>📅 {newDate}</p>
                <p>💰 € {cost}</p>
                <p>{description}</p>
            </div>
        </>
    )
}