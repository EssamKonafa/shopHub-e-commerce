import { auth } from './firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword } from '@firebase/auth'

export const createUSer = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signInWithE_PW = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
        
        return user;
    } catch (error) {
        throw error;
    }
};

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    return result
}

export const signOut = () => {
    return auth, signOut()
}

export const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email)
}

export const passwordChange = (password) => {
    return updatePassword(auth.currentUser, password)
}

export const sendEmailVariation = () => {
    return sendEmailVariation(auth, currentUser, {
        url: `${window.location.origin}/`
    })
}