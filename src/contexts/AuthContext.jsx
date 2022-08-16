import axios from 'axios'
import { createContext } from "react";
import { setCookie } from 'nookies';
import { useState } from "react";
import Router from "next/router";

export const AuthContext = createContext({});

const url = 'https://localhost:7139/Usuario';

export function AuthProvider({ children }) {

    const isAthenticated = false;
    const [user, setUser] = useState(null);

    async function signIn({ email, password }) {
        axios.get(url, { email, password })
            .then(resp => {
                const { token, user } = resp.data
                setUser(user)
            })
            .catch(error => console.log(error))

        setCookie(undefined, 'zdoclogin.token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        })

        Router.push('/home');
    }


    return (
        <AuthContext.Provider value={{ user, isAthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}