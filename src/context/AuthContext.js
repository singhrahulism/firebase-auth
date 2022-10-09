import React, { useReducer, createContext } from 'react'
import { firebaseAuth } from '../firebase/firebase'

const AuthContext = createContext()

const AuthReducer = (state, action) => {
    const auth = firebaseAuth.getAuth()
    switch(action.type)
    {
        case 'SIGN_IN':
                        firebaseAuth.signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                        .then(userCredentials => {
                            const user = userCredentials.user
                            alert(`SignedIn with user.email: ${user.email}`)
                            return true
                        })
                        .catch(err => alert(`Error SigningIn: ${err.message}`))
                        return false
        
        case 'SIGN_UP':
                        firebaseAuth.createUserWithEmailAndPassword(auth, action.payload.email, action.payload.password)
                        .then(userCredentials => {
                            const user = userCredentials.user
                            alert(`SignedUp with user.email: ${user.email}`)
                        })
                        .catch(err => alert(`Error SigningUp: ${err.message}`))
                        return state
        default: return state
    }
}

export const AuthProvider = ({ children }) => {

    const [isSignedIn, isSignedInDispatch] = useReducer(AuthReducer, false)

    const handleSignIn = (email, password) => {
        isSignedInDispatch({
            type: 'SIGN_IN',
            payload: {email, password}
        })
    }

    const handleSignUp = (email, password) => {
        isSignedInDispatch({
            type: 'SIGN_UP',
            payload: {email, password}
        })
        isSignedInDispatch({
            type: 'SIGN_IN',
            payload: {email, password}
        })
    }

    return <AuthContext.Provider value={{isSignedIn, handleSignIn, handleSignUp}} >
        {children}
    </AuthContext.Provider>

}

export default AuthContext