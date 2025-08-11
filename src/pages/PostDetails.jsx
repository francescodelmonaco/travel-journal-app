import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react";

export default function PostDetails() {
    const { id } = useParams();
    const { removePost, fetchSinglePost, singlePost } = useGlobalContext();
    const navigate = useNavigate();

    useEffect(() => { fetchSinglePost(id) }, [id]);

    const { event, location, date, description, cost, image, mood, pros, cons, effort } = singlePost;

    // from yyyy-mm-dd to dd-mm-yyyy
    const newDate = date ? date.split("-").reverse().join("/") : "";

    // votes
    const stars = (mood) => {
        if (mood === "happy") {
            return "★★★★★"
        } else if (mood === "neutral") {
            return "★★☆☆☆"
        } else {
            return "☆☆☆☆☆"
        }
    }

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

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-center">{event} | 📍 {location}</h1>

                {image && (
                    <img
                        src={image}
                        alt={event}
                        className="w-full h-64 object-cover rounded py-3"
                    />
                )}

                <h2 className="font-bold text-center text-xl">Info sull'esperienza</h2>

                <p>📅 <strong>Data:</strong> {newDate}</p>
                <p>💰 <strong>Prezzo:</strong> € {cost}</p>


                <div>
                    <p className="font-bold">Descrizione:</p>
                    <p className="text-justify">{description}</p>
                </div>

                <h2 className="font-bold text-center text-xl">Tirando le somme...</h2>

                <div>
                    <p><strong>Voto:</strong> {stars(mood)}</p>
                    <p><strong>Pro:</strong> {pros}</p>
                    <p><strong>Contro:</strong> {cons}</p>
                    <p><strong>Sforzo fisico:</strong> {effort} su 5</p>
                </div>
            </div>
        </>
    )
}