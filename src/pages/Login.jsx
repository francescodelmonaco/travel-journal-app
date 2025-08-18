import Logo from "/logo.webp";

export default function Login() {
    return (
        <div className="w-4/5 mx-auto flex flex-col">
            <div className="w-full mx-auto flex justify-center py-15">
                <img
                    className="w-20"
                    src={Logo}
                    alt="Travel Journal Logo"
                />

                <h1 className="text-3xl text-center font-bold self-center text-(--street)">Travel Journal</h1>
            </div>

            <form
                action="submit"
                className="flex flex-col w-full sm:w-1/2 mx-auto"
            >
                <label className="font-bold text-(--street) mb-3">Email</label>

                <input
                    type="email"
                    name="email"
                    placeholder="mario.rossi@gmail.com"
                    required
                    className="p-3 border border-(--street) rounded-xl mb-1.5"
                />

                <p className="text-(--street) text-xs mb-7">Inserisci la tua email per ricevere il codice di accesso</p>

                <button
                    type="submit"
                    className="bg-(--street) text-(--white) p-3 rounded-xl"
                >Invia codice</button>
            </form>
        </div>
    )
}