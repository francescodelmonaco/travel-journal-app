import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import Logo from "/logo.webp";

export default function Navbar() {
    const { setIsOpen } = useGlobalContext();

    return (
        <Link
            to={"/"}
            className="w-11/12 mx-auto flex justify-center pt-3"
            onClick={() => setIsOpen(false)}
        >
            <img
                className="w-20"
                src={Logo}
                alt="Travel Journal Logo"
            />

            <h1 className="text-3xl text-center font-bold self-center text-(--street)">Travel Journal</h1>
        </Link>
    )
}