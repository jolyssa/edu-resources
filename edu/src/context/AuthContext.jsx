import { createContext, useContext, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL
const AuthContext = createContext()


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${VITE_BASE_URL}/auth/current-user`, {
          credentials: 'include',
        })
        const data = await res.json()
        setUser(data)

        // Check URL parameters for authentication success
        const urlParams = new URLSearchParams(location.search)
        const success = urlParams.get('success')

        if (success === 'true' && data) {
          // Clear the URL parameters
          navigate('/', { replace: true })
        }

      } catch (err) {
        console.error('Error fetching user:', err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [location, navigate])

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}