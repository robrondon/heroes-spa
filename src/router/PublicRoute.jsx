import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router"

export const PublicRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const lastPath = localStorage.getItem('lastPath') || '/'

  return !logged ? children : <Navigate to={lastPath} />
}