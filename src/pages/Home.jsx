import { Link } from "react-router"
import { useGlobalContext } from "../contexts/GlobalContext"

export default function Home() {
    const { posts } = useGlobalContext();

    return (
        <>
            <header>
                <h1>Travel Journal</h1>
            </header>

            <main>
                <div>
                    {
                        posts.map((post, id) => {
                            const { event, location, date, description, cost } = post;

                            return (
                                <Link key={id} to={`${++id}`}>
                                    <h3>{event}</h3>
                                    <p>{location}</p>
                                    <p>{date}</p>
                                    <p>{description}</p>
                                    <p>€ {cost}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}