import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "/logo.webp";

export default function Login() {
    const [session, setSession] = useState(null)
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const signInWithGoogle = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    prompt: 'select_account',
                    access_type: 'offline'
                }
            }
        });

        if (error) {
            console.error('Errore durante il login:', error);
        }
    }

    if (!session) {
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

                <button
                    className="cursor-pointer bg-(--white) border border-(--street) p-4 rounded-3xl font-bold text-(--street) flex align-middle justify-center gap-3 w-1/2 self-center"
                    onClick={signInWithGoogle}>
                    <i class="fa-brands fa-google self-center"></i>Accedi con Google
                </button>
            </div>
        )
    }
    else {
        return (<div>Logged in!</div>)
    }
}