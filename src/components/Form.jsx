import { useGlobalContext } from "../contexts/GlobalContext";

export default function Form() {
    const { handleChange, post, createPost } = useGlobalContext();

    return (
        <form
            className="flex flex-col justify-between items-center gap-3 bg-(--peach) p-5 rounded shadow shadow-gray-500 mx-auto w-1/2"
            onSubmit={createPost}>
            <label className="font-bold self-start">Tipo di attività</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Attività"
                name="event"
                value={post.event}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Luogo</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Località"
                name="location"
                value={post.location}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Data</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="date"
                name="date"
                value={post.date}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Descrizione</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Descrizione"
                name="description"
                value={post.description}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Costo</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="number"
                step={0.01}
                placeholder="Prezzo"
                name="cost"
                value={post.cost}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Aggiungi una foto</label>
            <input
                type="file"
                name="image"
                accept="image/*"
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                onChange={handleChange}
            />

            {/* anteprima foto */}
            {post.image && (
                <div className="w-full">
                    <img
                        src={URL.createObjectURL(post.image)}
                        alt="Anteprima"
                        className="w-full h-50 object-cover rounded"
                    />
                </div>
            )}

            <label className="font-bold self-start">Mood dell'esperienza</label>
            <select
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="😊, 😐 o 😒"
                name="mood"
                value={post.mood}
                onChange={handleChange}
            >
                <option value="">Com'è andata?</option>
                <option value="happy">😊 bellissima esperienza</option>
                <option value="neutral">😐 nulla di che</option>
                <option value="sad">😒 da non fare mai più</option>
            </select>

            <label className="font-bold self-start">Pro dell'esperienza</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Descrivi cosa ti è piaciuto dell'esperienza"
                name="pros"
                value={post.pros}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Contro dell'esperienza</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Descrivi cosa non ti è piaciuto dell'esperienza"
                name="cons"
                value={post.cons}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Sforzo fisico dell'esperienza</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="number"
                min={1}
                max={5}
                placeholder="Sforzo fisico da 1 a 5"
                name="effort"
                value={post.effort}
                onChange={handleChange}
            />

            <button type="submit" className="bg-(--street) text-white py-1.5 px-2 w-50 rounded-full shadow cursor-pointer">Aggiungi</button>
        </form>
    )
}