import {  FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from '../../Config/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true)

    const createUser = (email, password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const login = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const socialRegister = (provider)=>{
        setLoding(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = ()=>{
        setLoding(true)
        return signOut(auth)
    }

    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth, email)
    }


    // Login google
    const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
    }
    // Login Github
    const githubLogin =()=>{
        return signInWithPopup(auth, githubProvider)
    };
    // Login Facebbok
    const facebookLogin =()=>{
        return signInWithPopup(auth, facebookProvider)
    }


    useEffect(()=>{

        const unSubcribe = onAuthStateChanged(auth, currentUser=>{
            setLoding(false)
            setUser(currentUser)
        })
        return ()=>{
            unSubcribe()
        }
    },[])

    const AuthInfo ={
        user,
        loading,
        createUser,
        login,
        logOut,
        socialRegister,
        resetPassword,
        googleLogin,
        githubLogin,
        facebookLogin


    }
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;
