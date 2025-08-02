import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
    return (
        <>
            <Navbar />

            <main className="w-4/5 mx-auto flex flex-col gap-5">
                <Outlet />
            </main>
        </>
    )
}