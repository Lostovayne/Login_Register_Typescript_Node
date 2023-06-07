import { createContext, useContext, useState } from 'react'

const AuthContext = createContext({
  isAuthenticated: false
})

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
