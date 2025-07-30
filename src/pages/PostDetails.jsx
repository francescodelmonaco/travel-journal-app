import { useParams } from "react-router"

export default function PostDetails() {
    const { id } = useParams();

    return (
        <>
            <h2>Esperienza {id}</h2>
            {/* ... tutti i dettagli ... */}
        </>
    )
}