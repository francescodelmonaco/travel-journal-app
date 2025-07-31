import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext"

export default function PostDetails() {
    const { id } = useParams();
    const { removePost } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <div>
            <button
                className="bg-red-900 text-white py-1.5 px-2 w-10 h-10 rounded-full shadow cursor-pointer self-end"
                onClick={() => {
                    removePost(id);
                    navigate("/")
                }}
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}