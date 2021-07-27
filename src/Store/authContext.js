import React from 'react'

const AuthContext = React.createContext({
  isLogggedIn: false,
  token: ''
})

export default AuthContext
