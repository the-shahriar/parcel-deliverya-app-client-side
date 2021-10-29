import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init"

initializeFirebaseApp();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .finally(() => {
                setLoading(false)
            });
    }

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setLoading(false);
            })

    }

    // observe user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false);
        });

        return () => unsubscribe;
    }, [auth])

    return {
        user,
        loading,
        setUser,
        signInWithGoogle,
        logOut,

    }

};

export default useFirebase;