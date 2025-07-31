import { useGlobalContext } from "../contexts/GlobalContext";

export default function Form() {
    const { handleChange, post, createPost } = useGlobalContext();

    return (
        <form
            className="flex flex-col justify-between items-center gap-3 bg-gray-100 p-5 rounded shadow"
            onSubmit={createPost}>
            <input
                className="border w-full rounded py-1.5 px-2 shadow bg-white"
                type="text"
                placeholder="Evento"
                name="event"
                value={post.event}
                onChange={handleChange}
            />

            <input
                className="border w-full rounded py-1.5 px-2 shadow bg-white"
                type="text"
                placeholder="Località"
                name="location"
                value={post.location}
                onChange={handleChange}
            />

            <input
                className="border w-full rounded py-1.5 px-2 shadow bg-white"
                type="date"
                name="date"
                value={post.date}
                onChange={handleChange}
            />

            <input
                className="border w-full rounded py-1.5 px-2 shadow bg-white"
                type="text"
                placeholder="Descrizione"
                name="description"
                value={post.description}
                onChange={handleChange}
            />

            <input
                className="border w-full rounded py-1.5 px-2 shadow bg-white"
                type="number"
                step={0.01}
                placeholder="Prezzo"
                name="cost"
                value={post.cost}
                onChange={handleChange}
            />

            <button type="submit" className="bg-black text-white py-1.5 px-2 w-50 rounded-full shadow cursor-pointer">Aggiungi</button>
        </form>
    )
}