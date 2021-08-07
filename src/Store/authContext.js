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
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error.message))
    return Uid()
  }
  function login (email, password) {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error.message))
    return Uid()
  }

  function logout () {
    setUid('')
    return auth.signOut()
  }

  function resetPassword (email) {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  function Uid () {
    setUid(auth.currentUser.uid)
  }
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
