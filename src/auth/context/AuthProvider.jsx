import { useReducer } from "react"
import { AuthContext, authReducer } from "./"
import { types } from "../types/types"

const initialState = {
  logged: false
}

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState)

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name
      }
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{ ...authState, login }}>
      {children}
    </AuthContext.Provider>
  )
}
