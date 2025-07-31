import { Link } from "react-router"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function Home() {
    const { posts, handleChange, post, createPost } = useGlobalContext();

    return (
        <>
            <header>
                <h1 className="text-4xl text-center font-bold py-5">Travel Journal</h1>
            </header>

            <main className="w-4/5 mx-auto">
                <form className="flex justify-between gap-3 my-5" onSubmit={createPost}>
                    <input
                        className="border w-full rounded py-1 px-2 shadow"
                        type="text"
                        placeholder="Evento"
                        name="event"
                        value={post.event}
                        onChange={handleChange}
                    />

                    <input
                        className="border w-full rounded py-1 px-2 shadow"
                        type="text"
                        placeholder="Località"
                        name="location"
                        value={post.location}
                        onChange={handleChange}
                    />

                    <input
                        className="border w-full rounded py-1 px-2 shadow"
                        type="date"
                        name="date"
                        value={post.date}
                        onChange={handleChange}
                    />

                    <input
                        className="border w-full rounded py-1 px-2 shadow"
                        type="text"
                        placeholder="Descrizione"
                        name="description"
                        value={post.description}
                        onChange={handleChange}
                    />

                    <input
                        className="border w-full rounded py-1 px-2 shadow"
                        type="number"
                        step={0.01}
                        placeholder="Costo"
                        name="cost"
                        value={post.cost}
                        onChange={handleChange}
                    />

                    <button type="submit" className="bg-black text-white py-1 px-2 w-full rounded shadow cursor-pointer">Aggiungi attività</button>
                </form>

                <div className="grid grid-cols-2 gap-5">
                    {
                        posts.map((post, index) => {
                            const { id, event, location, date, description, cost } = post;

                            return (
                                <div key={index} className="border border-black rounded p-3">
                                    <Link to={`/${id}`}>
                                        <h3>{event}</h3>
                                        <p>{location}</p>
                                        <p>{date}</p>
                                        <p>{description}</p>
                                        <p>€ {cost}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}