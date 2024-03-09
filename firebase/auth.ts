import { auth } from './firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword,signOut } from '@firebase/auth'

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

export const handleSignOut = async() => {
    try{
        await signOut(auth)
        console.log('user signed out successfully');
    }catch(err){
        console.log('error in signing out',err);
        
    }
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