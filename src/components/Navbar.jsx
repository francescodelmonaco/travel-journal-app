import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Link
            to={"/"}
            className="w-11/12 mx-auto flex justify-center pt-3"
        >
            <img
                className="w-25"
                src="/logo.webp"
                alt="Travel Journal Logo"
            />

            <h1 className="text-3xl text-center font-bold self-center">Travel Journal</h1>
        </Link>
    )
}