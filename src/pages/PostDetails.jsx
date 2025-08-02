import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react";

export default function PostDetails() {
    const { id } = useParams();
    const { removePost, fetchSinglePost, singlePost } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => { fetchSinglePost(id) }, [id]);

    const { event, location, date, description, cost } = singlePost;

    return (
        <>
            <button
                className="bg-red-900 text-white py-1.5 px-2 w-10 h-10 rounded-full shadow cursor-pointer"
                onClick={() => {
                    removePost(id);
                    navigate("/")
                }}
            >
                <i className="fa-solid fa-trash"></i>
            </button>

            <div>
                <p>{event}</p>
                <p>{location}</p>
                <p>{date}</p>
                <p>{description}</p>
                <p>{cost}</p>
            </div>
        </>
    )
}