import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function ConfirmModal() {
    const { removePost, setShowModal } = useGlobalContext();

    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow p-6 min-w-[300px]">
                <p className="mb-4">Sei sicuro di voler eliminare questo post?</p>

                <div className="flex justify-between gap-3">
                    <button
                        className="bg-(--street) text-(--white) px-3 py-1.5 rounded-full shadow w-full cursor-pointer"
                        onClick={() => setShowModal(false)}
                    >
                        Annulla
                    </button>

                    <button
                        className="bg-red-900 text-(--white) font-bold px-3 py-1.5 rounded-full shadow w-full cursor-pointer"
                        onClick={() => {
                            removePost(id);
                            navigate("/")
                        }}
                    >
                        Elimina
                    </button>
                </div>
            </div>
        </div>
    )
}