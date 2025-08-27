import { useGlobalContext } from "../contexts/GlobalContext";

export default function Form() {
    const { handleChange, post, createPost } = useGlobalContext();

    return (
        <form
            className="flex flex-col justify-between items-center gap-3 bg-(--peach) p-5 rounded-3xl shadow shadow-gray-400 mx-auto sm:w-3/4"
            onSubmit={createPost}>
            <label className="font-bold self-start">Nome attività</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-(--white) mb-2"
                type="text"
                placeholder="Escursione, visita museo, giornata in spiaggia..."
                name="event"
                value={post.event}
                onChange={handleChange}
            />

            <div className="flex justify-between w-full gap-5">
                <div className="flex flex-col w-1/2 gap-3">
                    <label className="font-bold self-start">Luogo</label>
                    <input
                        required
                        className=" w-full rounded py-1.5 px-2 shadow bg-(--white) mb-2"
                        type="text"
                        placeholder="Barcellona, San Teodoro, Milano..."
                        name="location"
                        value={post.location}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col w-1/2 gap-3">
                    <label className="font-bold self-start">Data</label>
                    <input
                        required
                        className=" w-full rounded py-1.5 px-2 shadow bg-(--white) mb-2"
                        type="date"
                        name="date"
                        value={post.date}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label className="font-bold self-start">Descrizione</label>
            <textarea
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-(--white) mb-2"
                type="text"
                placeholder="Racconta cos'hai fatto"
                name="description"
                value={post.description}
                onChange={handleChange}
            ></textarea>

            <label className="font-bold self-start">Costo</label>
            <input
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-(--white) mb-2"
                type="number"
                min={0}
                step={0.01}
                placeholder="es. 9.99"
                name="cost"
                value={post.cost}
                onChange={handleChange}
            />

            <label className="font-bold self-start">Foto</label>
            <input
                type="file"
                name="image"
                accept="image/*"
                className=" w-full rounded py-1.5 px-2 shadow bg-(--white) mb-2"
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

            <div className="flex justify-between w-full gap-5">
                <div className="flex flex-col w-1/2 gap-3">
                    <label className="font-bold self-start">Mood</label>
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
                </div>

                <div className="flex flex-col w-1/2 gap-3">
                    <label className="font-bold self-start">Sforzo fisico</label>
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
                </div>
            </div>



            <label className="font-bold self-start">Pro</label>
            <textarea
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Descrivi cosa ti è piaciuto dell'esperienza"
                name="pros"
                value={post.pros}
                onChange={handleChange}
            ></textarea>

            <label className="font-bold self-start">Contro</label>
            <textarea
                required
                className=" w-full rounded py-1.5 px-2 shadow bg-white mb-2"
                type="text"
                placeholder="Descrivi cosa non ti è piaciuto dell'esperienza"
                name="cons"
                value={post.cons}
                onChange={handleChange}
            ></textarea>

            <button type="submit" className="bg-(--street) text-white py-1.5 px-2 w-full sm:w-50 rounded-full shadow cursor-pointer">Aggiungi</button>
        </form>
    )
}