import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <h1 className="text-4xl text-center font-bold pt-5">- Travel Journal -</h1>
            </header>

            <main className="w-4/5 mx-auto flex flex-col gap-5">
                <Outlet />
            </main>
        </>
    )
}