import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth () {
  return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [uid, setUid] = useState()
  const [loading, setLoading] = useState(true)

  function signup (email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login (email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout () {
    return auth.signOut()
  }

  function resetPassword (email) {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setUid(auth.currentUser.uid)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    uid
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
