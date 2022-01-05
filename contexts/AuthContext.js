import Router from "next/router"
import { createContext, useState } from "react"
import firebase from "../lib/firebase"

const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signin = ()=>{
        try{
            setLoading(true)
            return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response)=>{
                setUser(response.user)
                Router.push('/dashboard')
            })
        }finally{
            setLoading(false)
        }
    }

    const signout = ()=>{
        try{
            Router.push('/')
            return firebase
            .auth()
            .signOut()
            .then(() => setUser(false)) 
        } finally{
            setLoading(false)
        }
    }

    return <AuthContext.Provider value={{user,loading,signin,signout}}>
              {children}
            </AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer

export default AuthContext