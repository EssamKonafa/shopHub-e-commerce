'use client'
import React, { useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../../../firebase/firebase"

const authContext = React.createContext()

export function useAuth() {
    return useContext(authContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userLogged, setUserLogged] = useState(false)
    const [isEmailUser, setIsEmailUser] = useState(false);
    const [loader, setLoader] = useState(true)

    async function initializeUser(user) {
        if (user) {
            setCurrentUser(user)
            setUserLogged(true)            
        } else {
            setCurrentUser(null)
            setUserLogged(false)
        }
        setLoader(false)
    }

    const value = {
        currentUser,
        userLogged,
        loader,
    }
    

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, initializeUser)
        return unsub
    }, [])

    return (
        <authContext.Provider value={value}>
            {!loader && children}
        </authContext.Provider>
    )

}