import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext"
import { useEffect } from "react";
import Loader from "../components/Loader";
import ConfirmModal from "../components/ConfirmModal";

export default function PostDetails() {
    const { id } = useParams();
    const { fetchSinglePost, singlePost, loading, showModal, setShowModal } = useGlobalContext();

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
    };

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="flex justify-end gap-3 pt-3">
                            {/* <button
                                className="bg-(--street) text-(--white) py-1.5 px-2 w-10 h-10 rounded-full shadow cursor-pointer"
                            onClick={() => setShowModal(true)}
                            >
                                <i className="fa-solid fa-pen"></i>
                            </button> */}

                            <button
                                className="bg-red-900 text-(--white) py-1.5 px-2 w-10 h-10 rounded-full shadow cursor-pointer"
                                onClick={() => setShowModal(true)}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </div>

                        {showModal &&
                            <ConfirmModal />
                        }

                        <div className="flex flex-col gap-2 pb-5">
                            <h1 className="text-2xl font-bold text-center">{event} | 📍 {location}</h1>

                            {image && (
                                <img
                                    src={image}
                                    alt={event}
                                    className="w-full h-100 object-cover rounded shadow my-3"
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
        </>
    )
}