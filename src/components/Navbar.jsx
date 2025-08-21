import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import Logo from "/logo.webp";
import { supabase } from "../supabaseClient";

export default function Navbar() {
    const { setIsOpen } = useGlobalContext();

    const navigate = useNavigate();

    // Logout da supabase
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error(error);
        } else {
            // svuoto cache
            localStorage.clear();
            sessionStorage.clear();

            navigate("/login");
        }
    };

    return (
        <div className="flex justify-between p-3 w-14/15 mx-auto align-middle">
            <Link
                to={"/"}
                className="flex justify-between"
                onClick={() => setIsOpen(false)}
            >
                <img
                    className="w-20"
                    src={Logo}
                    alt="Travel Journal Logo"
                />

                <h1 className="text-3xl text-center font-bold self-center text-(--street)">Travel Journal</h1>
            </Link>

            <button
                className="bg-(--street) text-white h-10 px-5 rounded-full shadow cursor-pointer self-center"
                onClick={signOut}
            >Log out <i className="fa-solid fa-right-from-bracket"></i></button>
        </div>
    )
}