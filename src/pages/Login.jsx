import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "/logo.webp";

export default function Login() {
    const [session, setSession] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            if (error) {
                console.error('Session error:', error)
                setError(error.message)
            }
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            console.log('Auth state change:', event, session)
            setSession(session)

            if (event === 'SIGNED_IN' && session) {
                navigate("/");
            }

            if (event === 'SIGN_IN_ERROR') {
                setError('Errore durante il login')
            }
        })

        return () => subscription.unsubscribe()
    }, [navigate])

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const signInWithGoogle = async () => {
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/`,
                queryParams: {
                    prompt: 'select_account',
                    access_type: 'offline'
                }
            }
        });

        if (error) {
            console.error('Errore durante il login:', error);
            setError(error.message)
        }

        setLoading(false)
    }

    if (!session) {
        return (
            <div className="w-4/5 mx-auto flex flex-col justify-center gap-15 text-center min-h-screen">
                <span className='text-(--street) text-2xl'>Benvenuto su...</span>

                <div className="w-full sm:w-1/2 self-center flex justify-center bg-(--yellow) py-5 -rotate-3 shadow-xl">
                    <img
                        className="w-20"
                        src={Logo}
                        alt="Travel Journal Logo"
                    />
                    <h1 className="text-3xl text-center font-bold self-center text-(--street) text-shadow-xs ">Travel Journal</h1>
                </div>

                <p className='text-(--street) text-2xl'>
                    Un diario di viaggio interattivo per raccogliere e rivivere i momenti più significativi delle tue vacanze estive! 📸🗺️
                </p>

                <i className="fa-regular fa-circle-down text-4xl text-(--street) self-center animate-bounce"></i>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                        {error}
                    </div>
                )}

                <button
                    className="cursor-pointer bg-(--white) border border-(--street) p-4 rounded-3xl font-bold text-(--street) flex align-middle justify-center gap-3 w-full md:w-1/3 self-center shadow disabled:opacity-50"
                    onClick={signInWithGoogle}
                    disabled={loading}
                >
                    {loading ? (
                        <span>Caricamento...</span>
                    ) : (
                        <>
                            <i className="fa-brands fa-google self-center"></i>
                            Accedi con Google
                        </>
                    )}
                </button>
            </div>
        )
    }
    else {
        return (<div>Logged in!</div>)
    }
}